import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CommonNavBar() {
  return (
    <Navbar className="px-3 secondary-background" variant="dark">
      <Navbar.Brand href="/">
        <h1 className="mincho text-primary-200">清水建築</h1>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">
          <span className="text-primary-200">ホーム</span>
        </Nav.Link>
        <Nav.Link href="/business_content">
          <span className="text-primary-200">事業内容</span>
        </Nav.Link>
        <Nav.Link href="/construction_example">
          <span className="text-primary-200">施工事例</span>
        </Nav.Link>
        <Nav.Link href="/news">
          <span className="text-primary-200">お知らせ</span>
        </Nav.Link>
        <Nav.Link href="/company_profile">
          <span className="text-primary-200">会社概要</span>
        </Nav.Link>
        <Nav.Link href="/contact">
          <span className="text-primary-200">お問い合わせ</span>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CommonNavBar;
