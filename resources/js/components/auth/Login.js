import React from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import "./styles.css";
import { apiClient } from '../../api';
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.get('/sanctum/csrf-cookie')
            .then(response => {
                apiClient.post('/login', {
                    email,
                    password
                }).then(response => console.log(response))
            })
    }
    return (
        <Container>
            <Row>
                <Col>
                    <div className="auth_wrapper">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Button type="submit">Login</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
