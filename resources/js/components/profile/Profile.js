import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Logolg from "../Content/Hero/img/hero2.png";
import "./styles.css";

const Profile = () => {
  return (
    <Container className="profile_wrapper">
      <Row>
        <Col xs={12} lg={4} md={6}>
          <Row>
            <div className="profile_welcome_wrapper">
              <div className="profile_welcome_1">
                <Col xs={6} md={6}>
                  <h4>Welcome Back!</h4>
                  <h4>It seems we like it simple</h4>
                </Col>
                <Col xs={6} md={6}>
                  <Image src={Logolg} className="header_image" />
                </Col>
              </div>
              <Row className="header_image_2_wrapper">
                <Col md={4} className="header_image_content">
                  <Image src={Logolg} className="header_image_2" />
                  <p className="header_image_2_text">Designer</p>
                </Col>
                <Col md={4} className="profile_stats_text">
                  <h4>125</h4>
                  <p>Questions Asked</p>
                </Col>
                <Col md={4} className="profile_stats_text">
                  <h4>124</h4>
                  <p>Question Answered</p>
                </Col>
              </Row>
            </div>
          </Row>
        </Col>
        <Col xs={12} lg={8} md={6} className="Profile_site_stats">
          <div>
            <div>
              <p>Unanswered Questions</p>
              <h4>123</h4>
            </div>
            <div>
              <p>Unattended Code Reviews</p>
              <h4>21</h4>
            </div>
            <div>
              <p>Your Pending Drafts</p>
              <h4>4</h4>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
