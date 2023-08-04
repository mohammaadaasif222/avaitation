import React from "react";
import { Row, Col } from "reactstrap";


const Nav = () => {
  return (
    <Row className="p-3 border">
      <Col md={3}>
        <h2>Mohammad</h2>
      </Col>
      <Col
        md={6}
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
       
      </Col>
      <Col
        md={3}
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        
      </Col>
    </Row>
  );
};

export default Nav;
