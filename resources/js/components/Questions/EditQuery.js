// import { apiClientPost } from "../../api";
import axios from "axios";
import React, { useMemo, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Editor from "rich-markdown-editor";
import "./styles.css";

const EditQuery = () => {
    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");

    const editorProps = useMemo(() => {
        return {
            placeholder:
                "Begin Typing you question, use '/' to show typing options",
            autofocus: true,
            defaultValue: question,
            onChange: (v) => {
                setQuestion((prev) => v());
            },
            extensions: [],
            embeds: [],
            tooltip: () => <div>ToolTip</div>,
        };
    }, [question]);

    const auth = localStorage.getItem("SITE_TOKEN");
    const bearer = `Bearer ${auth}`;
    console.log(bearer);
    const config = {
        headers: { Authorization: bearer },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const bodyParameters = {
            title,
            question,
        };
        axios
            .post("http://127.0.0.1:8000/api/create-question", {
                config,
                bodyParameters,
            })
            .then((res) => console.log(res));
        // apiClientPost
        //     .post("create-question", {
        //         title,
        //         question,
        //     })
        //     .then((response) => {
        //         // console.log(response);
        //         if (response.status === 200) {
        //             console.log(response);
        //         }
        //     });
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
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="editor_content">
                        <Editor {...editorProps} />
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
