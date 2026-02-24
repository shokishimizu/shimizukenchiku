import CommonHead from "@/ui_components/common/head";
import CommonMobileFooter from "@/ui_components/common/mobile_fotter";
import CommonMobileNavBar from "@/ui_components/common/mobile_navbar";
import { SetStateAction, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e: { target: { value: SetStateAction<string> } }) =>
    setName(e.target.value);
  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setEmail(e.target.value);
  const handleTelChange = (e: { target: { value: SetStateAction<string> } }) =>
    setTel(e.target.value);
  const handleMessageChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setMessage(e.target.value);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // 送信処理を記述する
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          tel: tel,
          message: message,
        }),
      });
      const jsonData = await response.json();
      if (response.ok) {
        const msg = jsonData.warning
          ? `問合せ完了しました。\n\n${jsonData.warning}`
          : "問合せ完了しました。";
        alert(msg);
      } else {
        alert(jsonData.error || "メッセージの送信が失敗しました");
      }
    } catch (err) {
      alert("メッセージの送信が失敗しました");
    }
  };

  return (
    <div>
      <CommonHead title="お問い合わせ" />
      <CommonMobileNavBar />
      <Container className="my-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>お名前</Form.Label>
            <Form.Control
              type="text"
              placeholder="フルネーム"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>メールアドレス</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>電話番号</Form.Label>
            <Form.Control
              type="tel"
              placeholder="090-XXXX-XXXX"
              value={tel}
              onChange={handleTelChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>お問い合わせ内容</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={message}
              onChange={handleMessageChange}
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button
              className="accent-background border-0"
              style={{ width: 150 }}
              type="submit"
            >
              送信
            </Button>
          </div>
        </Form>
      </Container>
      <CommonMobileFooter />
    </div>
  );
}