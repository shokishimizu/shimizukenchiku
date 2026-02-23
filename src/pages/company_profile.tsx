import CommonFooter from "@/ui_components/common/fotter";
import CommonHead from "@/ui_components/common/head";
import CommonNavBar from "@/ui_components/common/navbar";
import CompanyProfile from "@/ui_components/company_profile/company_info";
import ZehProfile from "@/ui_components/company_profile/zeh_info";
import { Card, Col, Container, ListGroup, Row, Table } from "react-bootstrap";

export default function News() {
  return (
    <div>
      <CommonHead title="会社概要" />
      <CommonNavBar />
      <CompanyProfile />
      <ZehProfile />
      <CommonFooter />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { req, res } = context;
  const userAgent = req.headers["user-agent"];
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

  if (isMobile) {
    res.writeHead(302, { Location: "/mobile/company_profile" });
    res.end();
  }

  return {
    props: {}, // 必要な場合はpropsを設定
  };
}
