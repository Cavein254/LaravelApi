import React, { useMemo, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Editor from "rich-markdown-editor";
import { apiClientPost } from "../../api";
import "./styles.css";

function Editing() {
    const [title, setTitle] = useState();
    const [error, setError] = useState();

    const [value, setValue] = useState("");
    const editorProps = useMemo(() => {
        const [defaultValue, setDefaultValue] = useState("");

        return {
            placeholder: "Placeholder....",
            autofocus: true,
            defaultValue: defaultValue,
            onChange: (v) => {
                setDefaultValue((prev) => v());
            },
            extensions: [],
            embeds: [],
            tooltip: () => <div>ToolTip</div>,
        };
    }, [defaultValue]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        apiClientPost
            .post("questions", {
                title,
            })
            .then((response) => {
                if (response.data.payload.status !== 200) {
                    setError(response.data.payload.message);
                }
                history.push("/");
            });
    };

    return (
        <Container>
            <div className="editor_wrapper">
                <Row>
                    <Col>
                        <Form className="form-input" onSubmit={handleOnSubmit}>
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
                        <Button variant="info">Save</Button>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Editing;
