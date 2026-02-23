import CommonHead from "@/ui_components/common/head";
import CommonMobileFooter from "@/ui_components/common/mobile_fotter";
import CommonMobileNavBar from "@/ui_components/common/mobile_navbar";
import CompanyProfile from "@/ui_components/company_profile/company_info";
import ZehProfile from "@/ui_components/company_profile/zeh_info";

export default function News() {
  return (
    <div>
      <CommonHead title="会社概要" />
      <CommonMobileNavBar />
      <CompanyProfile />
      <ZehProfile />
      <CommonMobileFooter />
    </div>
  );
}
