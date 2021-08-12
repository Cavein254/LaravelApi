import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { apiClient } from "../../api";
import useToken from "../../hooks/useToken";
import "./styles.css";

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(null);
    const history = useHistory();
    const { token, setToken } = useToken();

    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.post("login", { email, password }).then((res) => {
            if (!res.data.success) {
                setError(res.data.message);
                //find better ways to remove
                //this token
                sessionStorage.removeItem("SITE_TOKEN");
            } else {
                console.log(res.data.token);
                localStorage.setItem("SITE_TOKEN", res.data.token);
                if (!token) {
                    setError("Unable to Authenticate User");
                }
                history.push("/");
            }
        });
    };
    return (
        <Container>
            <Row>
                <Col>
                    <div className="auth_wrapper">
                        <Form>
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
                            <Button type="submit" onClick={handleSubmit}>
                                Login
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
            <h1>{error}</h1>
        </Container>
    );
};

export default Login;
