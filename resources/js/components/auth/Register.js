import React from "react";
import { Form, Container, Button, Col, Row } from "react-bootstrap";
import { apiClient } from '../../api';


const Register = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirm, setConfirm] = React.useState('');
    const [username, setUsername] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.post('register',{
            email,
            password,
            "password_confirmation":confirm,
            "name":username,

        }).then(response => {
            if(response) {
                console.log(response.data.user)
            }
        })
    }
  return (
    <Container>
      <Row>
        <Col>
          <div className="auth_wrapper">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicText">
                <Form.Label>User name</Form.Label>
                <Form.Control
                type="text"
                placeholder="User name"
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                 />
              </Form.Group>
              <Button type="submit">Register</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
