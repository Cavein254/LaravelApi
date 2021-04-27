import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import Logolg from "../Content/Hero/img/hero2.png";
import { Link } from "react-router-dom";
import "./styles.css";

const ProfileInfo = () => {
  return (
    <Container className="profile_wrapper">
      <Row>
        <Col xs={12} lg={4} md={6}>
          <Row>
            <div className="profile_welcome_wrapper">
              <div>
                <h1>Personal Information</h1>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus ab temporibus officiis autem at aperiam
                  exercitationem perferendis fugiat quis? Exercitationem
                  necessitatibus tempora eius quis blanditiis aspernatur
                  laudantium quisquam pariatur eaque.
                </p>
                <Form>
                  <Form.Group controlId="formBasicText">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" placeholder="User name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="formBasicNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Phone Number" />
                  </Form.Group>
                  <Form.Group controlId="formBasicText">
                    <Form.Label>Label</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Frontend, Designer, Backend ..etc"
                    />
                  </Form.Group>
                  <Row>
                    <Col className="profile_edit_btn">
                      <Button variant="primary">
                        <Link to="/editprofile">
                          <span className="link_text">Edit Profile</span>
                        </Link>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Row>
        </Col>
        <Col xs={12} lg={8} md={6} className="Profile_site_stats">
          <div>
            <h4>Available Messages</h4>
          </div>
          <div>
            <p>You Currently have no messages</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileInfo;
