import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { apiClient } from "../../api";
import "./styles.css";

const EditQuery = () => {
    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient
            .post("questions", {
                title,
                question,
            })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response);
                }
            });
    };

    return (
        <Container>
            <div className="editor_wrapper">
                <Row>
                    <Col>
                        <Form className="form-input">
                            <input
                                type="hidden"
                                name="token"
                                value={csrf_token}
                            />
                            <Form.Group controlId="formBasicText">
                                <Row className="editor_topbar">
                                    <Col>Post Your Question Below</Col>
                                    <Col className="publish_btn">
                                        <Button
                                            variant="secondary"
                                            className="btn_draft"
                                        >
                                            Save as Draft
                                        </Button>
                                        <Button>Publish</Button>
                                    </Col>
                                </Row>
                                <Form.Control
                                    type="text"
                                    placeholder="Question Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <Form.Control
                                    type="text"
                                    placeholder="content"
                                    value={question}
                                    onChange={(e) =>
                                        setQuestion(e.target.value)
                                    }
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="editor_content">
                        <Editor
                            id="123"
                            value={question}
                            onChange={setQuestion}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="bottom_btn">
                        <Button variant="danger" className="btn_danger">
                            Delete
                        </Button>
                        <Button variant="info" onClick={handleSubmit}>
                            Save
                        </Button>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default EditQuery;
