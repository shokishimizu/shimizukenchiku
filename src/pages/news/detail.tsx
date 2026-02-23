import CommonFooter from "@/ui_components/common/fotter";
import CommonNavBar from "@/ui_components/common/navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {  Container } from "react-bootstrap";
import { DateFormatter } from "@/utils/dateFormatter";
import axios from "axios";
import Link from "next/link";
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
      console.log(`⭐️⭐️: ${data.title}`);
      setNews(data);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <CommonHead title="お知らせ" />
      <CommonNavBar />
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
        <Link href="/news">一覧に戻る</Link>
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
    res.writeHead(302, { Location: "/mobile/news/detail" });
    res.end();
  }

  return {
    props: {}, // 必要な場合はpropsを設定
  };
}
