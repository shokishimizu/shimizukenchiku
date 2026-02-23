import { Container, Table } from "react-bootstrap";

function ZehProfile() {
  return (
    <Container className="mt-3 mb-20">
      <h2 className="text-center mt-10 mb-5">ZEH住宅受託目標の公表</h2>
      <p>
        ZEH住宅とは「Net Zero Energy
        House(ネットゼロエネルギーハウス)」の略称であり、
        経済産業省・資源エネルギー庁が「住宅については、２０２０年までに標準的な新築住宅で、
        ２０３０年までに新築住宅の平均で住宅の年間の一次エネルギー消費量が正味（ネット）でゼ
        ロとなる住宅
        （以下、「ZEH」という）の実現を目指す」というのを目指しています。
        <br />
        それを踏まえ、清水建築ではZEH支援事業に取り組むことにし、以下のZEH普及目標を設定し、ZEHビルダー登録に申請いたします。
      </p>
      <h4 className="text-center mt-10 mb-2">新築 実績報告</h4>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>2020年度</th>
            <th>2021年度</th>
            <th>2022年度</th>
            <th>2023年度</th>
            <th>2024年度</th>
            <th>2025年度</th>
          </tr>
          <tr>
            <td>実績</td>
            <td>実績</td>
            <td>実績</td>
            <td>実績</td>
            <td>実績</td>
            <td>目標</td>
          </tr>
          <tr>
            <td>50%</td>
            <td>100%</td>
            <td>0%</td>
            <td>50%</td>
            <td>50%</td>
            <td>75%</td>
          </tr>
        </tbody>
      </Table>
      <h4 className="text-center mt-10 mb-2">既存改修 実績報告</h4>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>2020年度</th>
            <th>2021年度</th>
            <th>2022年度</th>
            <th>2023年度</th>
            <th>2024年度</th>
            <th>2025年度</th>
          </tr>
          <tr>
            <td>実績</td>
            <td>実績</td>
            <td>実績</td>
            <td>実績</td>
            <td>実績</td>
            <td>目標</td>
          </tr>
          <tr>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
            <td>50%</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default ZehProfile;
