import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import Link from "next/link";

export default function CommonMobileNavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <>
      <Navbar className="secondary-background" expand="true" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <h1 className="mincho text-primary-200">清水建築</h1>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={toggleOffcanvas}
          />
        </Container>
      </Navbar>


      <Offcanvas show={showOffcanvas} onHide={toggleOffcanvas} placement="end" className="secondary-background custom-offcanvas">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/" className="text-end">
              <span className="text-primary-200">ホーム</span>
            </Nav.Link>
            <Nav.Link href="/business_content" className="text-end">
              <span className="text-primary-200">事業内容</span>
            </Nav.Link>
            <Nav.Link href="/construction_example" className="text-end">
              <span className="text-primary-200">施工事例</span>
            </Nav.Link>
            <Nav.Link href="/news" className="text-end">
              <span className="text-primary-200">お知らせ</span>
            </Nav.Link>
            <Nav.Link href="/company_profile" className="text-end">
              <span className="text-primary-200">会社概要</span>
            </Nav.Link>
            <Nav.Link href="/contact" className="text-end">
              <span className="text-primary-200">お問い合わせ</span>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
