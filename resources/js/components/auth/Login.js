import React from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import "./styles.css";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { apiClient,SITE_TOKEN } from '../../api';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.post('login',{
            email,
            password,
        }).then(response => {
            if(response.status === 200) {
                const token = (response.data.token);
                localStorage.setItem("SITE_TOKEN",token);
                history.push('/')
            }
        })
    }
    return (
        <Container>
            <Row>
                <Col>
                    <div className="auth_wrapper">
                        <Form onSubmit={handleSubmit}>
                            <input type="hidden" name="token" value={csrf_token}/>
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
