import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { apiClient } from "../../api";
import "./styles.css";

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const history = useHistory();
    // const { user } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient
            .post("login", {
                email,
                password,
            })
            .then((response) => {
                console.log("1", response.data);
                console.log("2", response.data.payload);

                if (response.data.payload !== 200) {
                    setError(response.data.payload.message);
                }
                setUser(response.data.payload.user);
                const token = response.data.payload.token;
                localStorage.setItem("SITE_TOKEN", token);
                history.push("/");
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
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
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
                                    required
                                />
                            </Form.Group>
                            <Button type="submit">Login</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
            <h1>{error}</h1>
        </Container>
    );
};

export default Login;
