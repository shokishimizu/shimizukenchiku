import CommonHead from "@/ui_components/common/head";
import CommonMobileFooter from "@/ui_components/common/mobile_fotter";
import CommonMobileNavBar from "@/ui_components/common/mobile_navbar";
import ImageSlider from "@/ui_components/home/image_slider";
import QA from "@/ui_components/home/qa";
import TopConstruction from "@/ui_components/home/top_construction";
import TopNews from "@/ui_components/home/top_news";
import React from "react";

export default function MobileHome() {
  return (
    <div style={{ width: "100%" }}>
      <CommonHead title="ホーム" />
      <CommonMobileNavBar />
      <ImageSlider isMobile={true} />

      <TopNews isMobile={true} />
      <TopConstruction isMobile={true} />
      <QA isMobile={true} />

      <CommonMobileFooter />
    </div>
  );
}
