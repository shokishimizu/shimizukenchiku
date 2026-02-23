import { DateFormatter } from "@/utils/dateFormatter";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

function TopNews({ isMobile }: { isMobile: boolean }) {
  const [newsList, setNewsList] = useState<News[]>();
  const dateFormatter = new DateFormatter();

  const getNews = async () => {
    // const host = window.location.host;
    console.log("host:", window.location.host);
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

  if (isMobile) {
    return (
      <Container>
      <h3 className="mt-5 text-center">お知らせ</h3>
      <ListGroup variant="flush" className="news-list">
        {newsList?.map((news) => (
          <ListGroup.Item key={news.id} className="item">
            <Link href={`/mobile/news/detail?id=${news.id}`} style={{display: "inline"}}>
              <Row className="w-100" noGutters>
                <Col className="date" style={{ fontSize: "14px", maxWidth: "30%", minWidth: "10%", padding: "0 5px 0 0"}}>
                  {dateFormatter.formatDate(news.create_date)}
                </Col>
                <Col className="category" style={{ maxWidth: "20%", minWidth: "10%", padding: "0 5px 0 0" }}>
                  <span style={{ fontSize: "10px", padding: 5 }}>お知らせ</span>
                </Col>
                <Col className="title" style={{ fontSize: "14px", maxWidth: "100%", minWidth: "10%", padding: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                  {news.title}
                </Col>
              </Row>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Link href="/mobile/news" className="text-right text-secondary-300">
        <p>もっと見る</p>
      </Link>
    </Container>
    );
  }

  return (
    <Container>
      <h3 className="mt-5 text-center">お知らせ</h3>
      <ListGroup variant="flush" className="news-list">
        {newsList?.map((news) => (
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
      <Link href="/news" className="text-right text-secondary-300">
        <p>もっと見る</p>
      </Link>
    </Container>
  );
}

export default TopNews;
