import React, {useEffect} from "react";
import {getAllQuestion}  from '../../api';
import { Row, Col, Container } from "react-bootstrap";
import { FaEye, FaThumbsUp } from "react-icons/fa";
import "./styles.css";

function Questions({data}) {
  return (
    <Container className="question_wrapper">
      <Row>
        <Col className="col-3 side_view">
          <span>
            <FaEye /> Views: {data.views}
          </span>
          <span>
            <FaThumbsUp /> Upvotes: {data.likes}
          </span>
          <span>
            <FaEye /> Answers: {data.answers}
          </span>
        </Col>
        <Col className="col-9 main_content_question">
          <h1>
           {data.title}
          </h1>
          <div className="question_footer">
            <div>
              <small className="text-muted">
                  {data.created_at}
                  </small>
            </div>
            <div className="question_tags">tags : c++ css javascript</div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Questions;
