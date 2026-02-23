import CommonFooter from "@/ui_components/common/fotter";
import CommonHead from "@/ui_components/common/head";
import CommonNavBar from "@/ui_components/common/navbar";
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
      <CommonNavBar />
      <Container className="mt-3 mb-20">
        <h2 className="text-center mt-10 mb-5">会社概要</h2>
        <Row xs={1} md={2} className="g-4 mt-2 mx-2">
          {messages.map((val, index) => (
            <Col key={index} className="m-0" style={{ width: "100%" }}>
              <Card className="border-0">
                <div className="d-flex align-items-center">
                  {val.side === "left" ? (
                    <Card.Img
                      variant="top"
                      src={val.src}
                      style={{ width: "50%" }}
                    />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Text>{val.text}</Card.Text>
                  </Card.Body>
                  {val.side === "right" ? (
                    <Card.Img
                      variant="top"
                      src={val.src}
                      style={{ width: "50%" }}
                    />
                  ) : null}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <CommonFooter />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { req, res } = context;
  const userAgent = req.headers["user-agent"];
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

  if (isMobile) {
    res.writeHead(302, { Location: "/mobile/business_content" });
    res.end();
  }

  return {
    props: {}, // 必要な場合はpropsを設定
  };
}
