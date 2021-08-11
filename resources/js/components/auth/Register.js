import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { apiClient } from "../../api";
const Register = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirm, setConfirm] = React.useState("");
    const [username, setUsername] = React.useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient
            .post("register", {
                email,
                password,
                password_confirmation: confirm,
                name: username,
            })
            .then((response) => {
                if (response) {
                    if (response.data.success) {
                        return history.push("/login");
                    }
                }

                console.log(response.data);
            });
    };
    return (
        <Container>
            <Row>
                <Col>
                    <div className="auth_wrapper">
                        <Form onSubmit={handleSubmit}>
                            <input
                                type="hidden"
                                name="token"
                                value={csrf_token}
                            />
                            <Form.Group controlId="formBasicText">
                                <Form.Label>User name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="User name"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="password"
                                    value={confirm}
                                    onChange={(e) => setConfirm(e.target.value)}
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
