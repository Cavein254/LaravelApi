import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "./styles.css";

const SubsectionText = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="subheading-text text_wrapper">
            <h1 className="text-center">What is TuCode.com?</h1>
          </div>
          <p className="text-center">
            Tucode provides creative individuals with a community where they can
            receive answers to aid in their creative process. Unlike other
            communities where one is criticized for asking "dumb" questions.
            Here, we know the creative process can be hard and there are no
            "dumb" questions
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SubsectionText;
