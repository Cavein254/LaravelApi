import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { apiClient, CSRF_TOKEN } from "../../api";
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
        apiClient.get(CSRF_TOKEN).then((response) => {
            apiClient
                .post("login", {
                    email,
                    password,
                })
                .then((response) => {
                    console.log(response);
                    if (response.data.payload.status === 200) {
                        localStorage.setItem(
                            "token",
                            response.data.payload.token
                        );
                        axios.defaults.headers.common[
                            "Authorization"
                        ] = `Bearer ${response.data.payload.token}`;
                        axios.defaults.headers.common["Accept"] = "*/*";
                        console.log(`Bearer ${response.data.payload.token}`);
                        // history.push("/");
                    } else {
                        setError(response.data.payload.message);
                        localStorage.removeItem("token");
                    }
                });
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
