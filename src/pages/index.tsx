import CommonFooter from "@/ui_components/common/fotter";
import CommonHead from "@/ui_components/common/head";
import CommonNavBar from "@/ui_components/common/navbar";
import ImageSlider from "@/ui_components/home/image_slider";
import QA from "@/ui_components/home/qa";
import TopConstruction from "@/ui_components/home/top_construction";
import TopNews from "@/ui_components/home/top_news";
import React from "react";

export default function Home() {
  return (
    <div style={{ width: "100%" }}>
      <CommonHead title="ホーム" />
      <CommonNavBar />
      <ImageSlider isMobile={false} />

      <TopNews isMobile={false} />
      <TopConstruction isMobile={false} />
      <QA isMobile={false} />

      <CommonFooter />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { req, res } = context;
  const userAgent = req.headers['user-agent'];
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

  if (isMobile) {
    res.writeHead(302, { Location: '/mobile' });
    res.end();
  }

  return {
    props: {}, // 必要な場合はpropsを設定
  };
}