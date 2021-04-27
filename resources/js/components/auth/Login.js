import React from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import "./styles.css";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="auth_wrapper">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" />
              </Form.Group>
              <Button>Login</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
