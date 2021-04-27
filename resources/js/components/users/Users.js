import React from "react";
import Logolg from "../Content/Hero/img/hero2.png";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

import "./styles.css";

const Users = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Image src={Logolg} />
          </Row>
          <Row>
            <h4>John Doe</h4>
          </Row>
          <Row>
            <h6>Designer / Programmer</h6>
          </Row>
          <Row>
            <p>[PHP, JavaScript, Python]</p>
          </Row>
          <hr />
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Users;
