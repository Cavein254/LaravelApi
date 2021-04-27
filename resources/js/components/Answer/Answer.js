import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Editor from "rich-markdown-editor";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

const Answer = () => {
  return (
    <Container>
      <div className="editor_wrapper">
        <Row>
          <Col className="editor_content">
            <Editor />
          </Col>
        </Row>
        <Row>
          <Col className="bottom_btn">
            <Button variant="danger" className="btn_danger">
              Delete
            </Button>
            <Button variant="info">Edit</Button>
          </Col>
        </Row>
      </div>
      <div>
        <p className="text-muted">A simple yet useful comment</p>
      </div>
    </Container>
  );
};

export default Answer;
