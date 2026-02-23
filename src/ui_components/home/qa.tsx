import { Container, Image } from "react-bootstrap";

function QA({ isMobile }: { isMobile: boolean }) {
  const messages = [
    { side: "left", text: "Q.見積もりの相談は無料でしょうか？" },
    {
      side: "right",
      text: "A.はい！無料で行っています。メールやお電話などで受けております。\n清水建築LINE@の方が簡単にできるのでぜひLINEでご相談ください。",
    },
    { side: "left", text: "Q.お問い合わせ時間や曜日の指定はありますか？" },
    {
      side: "right",
      text: "A.電話の場合は10時〜18時の月曜〜土曜日の間です。\n作業中や運転中によりお電話に出れない場合がある為ぜひお問い合わせページをご覧ください。",
    },
    { side: "left", text: "Q.活動範囲はどのくらい可能でしょうか？" },
    {
      side: "right",
      text: "A.埼玉県さいたま市に事業所があるため、主に埼玉県中心で行なっております。\nただし、お客様のご要望により、関東近郊での活動も可能です。",
    },
  ];

  return (
    <Container className="mb-5">
      <h3 className="text-center">よくある質問</h3>
      {messages.map((message, index) => (
        <div key={index} className={`balloon-chat ${message.side}`}>
          <figure className="icon-img">
            {message.side === "left" ? (
              <Image src="/qa/nayami.jpeg" alt="代替えテキスト" />
            ) : (
              <Image src="/qa/kaiketu.jpg" alt="代替えテキスト" />
            )}
          </figure>
          <div className="chatting">
            <p className="chat-text whitespace-pre-wrap">{message.text}</p>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default QA;
