import CommonFooter from "@/ui_components/common/fotter";
import CommonHead from "@/ui_components/common/head";
import CommonNavBar from "@/ui_components/common/navbar";
import { DateFormatter } from "@/utils/dateFormatter";
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

export default function News() {
  const [newsList, setNewsList] =
    useState<News[]>();
  const dateFormatter = new DateFormatter();

  const getNews = async () => {
    const response = await axios.get("/api/news");
    return response.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data: News[] = await getNews();
      setNewsList(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <CommonHead title="お知らせ" />
      <CommonNavBar />
      <Container className="my-3">
        <ListGroup variant="flush" className="news-list">
          {newsList?.slice(0, 5).map((news) => (
            <ListGroup.Item key={news.id} className="item">
              <a href={`/news/detail?id=${news.id}`}>
                <Row className="w-100" noGutters>
                  <Col xs={12} md={1} className="date">
                    {dateFormatter.formatDate(news.create_date)}
                  </Col>
                  <Col xs={12} md={1} className="category">
                    <span>お知らせ</span>
                  </Col>
                  <Col xs={12} md={8} className="title">
                    {news.title}
                  </Col>
                </Row>
              </a>
            </ListGroup.Item>
          ))}
        </ListGroup>
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
    res.writeHead(302, { Location: "/mobile/news" });
    res.end();
  }

  return {
    props: {}, // 必要な場合はpropsを設定
  };
}
