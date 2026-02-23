import CommonHead from "@/ui_components/common/head";
import CommonMobileFooter from "@/ui_components/common/mobile_fotter";
import CommonMobileNavBar from "@/ui_components/common/mobile_navbar";
import { DateFormatter } from "@/utils/dateFormatter";
import axios from "axios";
import Link from "next/link";
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
      <CommonMobileNavBar />
      <Container className="my-3">
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
      </Container>
      <CommonMobileFooter />
    </div>
  );
}
