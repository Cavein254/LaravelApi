import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Editor from "rich-markdown-editor";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "./styles.css";

const EditQuery = () => {
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  console.log(question);

  return (
    <Container>
      <div className="editor_wrapper">
        <Row>
          <Col>
            <Form className="form-input">
              <Form.Group controlId="formBasicText">
                <Row className="editor_topbar">
                  <Col>Post Your Question Below</Col>
                  <Col className="publish_btn">
                    <Button variant="secondary" className="btn_draft">
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
            <Button variant="info">Save</Button>
          </Col>
        </Row>
      </div>
      <h4>{title}</h4>
      <h1>{question}</h1>
    </Container>
  );
};

export default EditQuery;
