import React from "react";
import { Form, Container, Button, Col, Row } from "react-bootstrap";

const Register = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="auth_wrapper">
            <Form>
              <Form.Group controlId="formBasicText">
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" placeholder="User name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="password" />
              </Form.Group>
              <Button>Register</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
