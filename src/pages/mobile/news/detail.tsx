import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {  Container } from "react-bootstrap";
import { DateFormatter } from "@/utils/dateFormatter";
import axios from "axios";
import Link from "next/link";
import CommonMobileNavBar from "@/ui_components/common/mobile_navbar";
import CommonMobileFooter from "@/ui_components/common/mobile_fotter";
import CommonHead from "@/ui_components/common/head";

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [news, setNews] = useState<News>();
  const dateFormatter = new DateFormatter();

  const getNews = async (id: string) => {
    const response = await axios.get("/api/news_detail?id=" + id);
    return response.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data: News = await getNews(id as string);
      setNews(data);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <CommonHead title="お知らせ" />
      <CommonMobileNavBar />
      <Container className="mt-3 mb-20">
        <div className="mt-10 mb-5">
          <h2 className="text-left  mb-2" style={{ marginBottom: "0" }}>
            {news?.title}
          </h2>
          <p className="text-left">
            投稿日: {dateFormatter.formatDate(news?.create_date ?? "")}
          </p>
        </div>
        <p
          className="whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: news?.description?.replace(/\\n/g, "<br>") ?? "",
          }}
        ></p>
      </Container>
      <Container className="mt-3 mb-20 text-center">
        <Link href="/mobile/news">一覧に戻る</Link>
      </Container>
      <CommonMobileFooter />
    </div>
  );
}
