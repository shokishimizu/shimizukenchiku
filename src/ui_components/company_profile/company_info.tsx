import { Container, Table } from "react-bootstrap";

function CompanyProfile() {
  return (
    <Container className="mt-3 mb-20">
      <h2 className="text-center mt-10 mb-5">会社概要</h2>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>会社名</th>
            <td>株式会社清水建築</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>埼玉県さいたま市岩槻区掛169</td>
          </tr>
          <tr>
            <th>代表取締役</th>
            <td>清水 三秋</td>
          </tr>
          <tr>
            <th>創立</th>
            <td>昭和56年(1981年)</td>
          </tr>
          <tr>
            <th>資格</th>
            <td>一級建築技能士/宅地建物取引主任者</td>
          </tr>
          <tr>
            <th>TEL/FAX</th>
            <td>048-758-0085/048-758-0162</td>
          </tr>
          <tr>
            <th>主な事業</th>
            <td>新築・リフォーム・注文住宅・Zeh住宅</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default CompanyProfile;
