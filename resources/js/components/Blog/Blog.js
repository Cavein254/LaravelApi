import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import {FaThumbsUp, FaEye} from 'react-icons/fa';
import "./styles.css";


const Blog = ({title,update}) => {
  return <div>
       <Container className="question_wrapper">
      <Row>
        <Col className="col-3 side_view">
          <span>
            <FaEye /> Views: 12
          </span>
          <span>
            <FaThumbsUp /> Upvotes: 11
          </span>
          <span>
            <FaEye /> Answers: 2
          </span>
        </Col>
        <Col className="col-9 main_content_question">
          <h1>
            {title}
          </h1>
          <div className="question_footer">
            <div>
              <small className="text-muted">Posted: {update}</small>
            </div>
            <div className="question_tags">tags : c++ css javascript</div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  </div>;
};

export default Blog;
