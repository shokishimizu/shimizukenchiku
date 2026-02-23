import CommonHead from "@/ui_components/common/head";
import CommonMobileFooter from "@/ui_components/common/mobile_fotter";
import CommonMobileNavBar from "@/ui_components/common/mobile_navbar";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function BusinessContent() {
  const messages = [
    {
      side: "left",
      src: "/business_content/home.jpg",
      title: "注文住宅",
      text: "注文住宅ではお客様のご要望をしっかり聞き、理想のお家を作ることができます。\n建売の場合では元々のデザインを買うことになるため安価ではありますが、理想ではありません。\nですが注文住宅であれば、子供ができた時に部屋がいくつ欲しいだとか、リモートワークのためのお部屋が欲しい、家事室な戸が欲しい奥様や\n理想のキッチンなど様々な事を叶える事ができます。\nそんなお客様の一生のお家を理想の形で作り上げるのが注文住宅です。",
    },
    {
      side: "right",
      src: "/business_content/reform.jpg",
      title: "リフォーム",
      text: "リフォームでは今あるお家を改築することができます。\n子供が増えて部屋を増やしたい、家が古くなってきたから一掃して綺麗にしたい。\nなどリフォームすることで新しい雰囲気になり、飽きないお部屋にすることができます。\nリフォームはお家の状況や創りによって値段も変わるのでぜひ気軽にご相談ください！",
    },
    {
      side: "left",
      src: "/business_content/store.jpg",
      title: "店舗・事務所",
      text: "飲食店を始めたい！会社の事務所を設立したい！など営業に関する設立も行っております。\n保育園を設立したり、会社を建てる際の事務所を創りたいなど様々な用件を叶えることができます。 飲食店を始める際にもご相談をいただければ内容もよりおしゃれに理想の店舗を作ることができます。 施工事例を確認するとよりわかりやすいかと思います！\nぜひ、お気軽にご相談ください。",
    },
    {
      side: "right",
      src: "/business_content/zeh.jpg",
      title: "Zeh住宅",
      text: "Zeh住宅とは「Net Zero Energy House(ネットゼロエネルギーハウス)」の略称でエコなお家を 目指すのがZeh住宅です。Zeh住宅は国が推進している物であり、2030年にはほとんどの新築をZehにする 方針です。条件を満たすことで国から補助金をもらう事ができます。気になる方はぜひご相談ください。",
    },
  ];

  return (
    <div>
      <CommonHead title="事業内容" />
      <CommonMobileNavBar />
      <Container className="mt-3 mb-20">
        <h2 className="text-center mt-10 mb-5">会社概要</h2>
        <Row xs={1} md={2} className="g-4 mt-2 mx-2">
          {messages.map((val, index) => (
            <Col key={index} className="m-0" style={{ width: "100%" }}>
              <Card className="border-0">
                <div className="align-items-center">
                  <Card.Img
                    src={val.src}
                    style={{ width: "100%" }}
                  />
                  <Card.Body style={{ paddingLeft: 0, paddingRight: 0, }}>
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Text>{val.text}</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <CommonMobileFooter />
    </div>
  );
}
