import React from "react";
import { Container, Row, Col, Image, Nav, Form, Button } from "react-bootstrap";

function FooterInfo() {
  return (
    <div>
      <Row className="footer_pallet_wrapper">
        <Col xs={12} md={4} className="footer_pallet">
          ######
        </Col>
        <Col xs={12} md={4} className="footer_pallet">
          <div>
            <h4>Contact Us</h4>
            <Button>Contact Form</Button>
          </div>
        </Col>
        <Col xs={12} md={4} className="footer_pallet">
          <div>
            <h4>Site Info</h4>
            <small>&#169; 2021- All rights reserved</small>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default FooterInfo;
