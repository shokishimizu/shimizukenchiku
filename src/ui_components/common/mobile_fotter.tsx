import { Col, Row } from "react-bootstrap";

function CommonMobileFooter() {
  return (
    <>
      <Row className="mx-0 py-1" style={{ backgroundColor: "#486a83" }}>
        <Col xs={6}>
          <img src="/background/jinbei.png" width="90%" className="float-right" />
        </Col>
        <Col xs={6} className="mt-2">
          <img src="/zeh/sw_color_cmyk.jpg" width="60%" />
        </Col>
      </Row>
      <div className="text-center py-2" style={{ backgroundColor: "#486a83", color: "white", fontSize: "0.8em" }}>
        &copy; 2024 Shimizu Kenchiku inc.
      </div>
    </>
  );
}

export default CommonMobileFooter;
