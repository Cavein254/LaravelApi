import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import {
  FaBug,
  FaFileCode,
  FaPeopleCarry,
  FaRegNewspaper,
} from "react-icons/fa";
import "./styles.css";

function Subsection() {
  return (
    <Container fluid className="subheading">
      <Row>
        <Col xs={12} md={6}>
          <div>
            <h1 className="text-center">
              <FaBug className="faicon_bug" />
              Bug Discovery
            </h1>
          </div>
          <p className="text-center">
            Its common for one to spend hours knocking their heads aganist the
            wall wondering why an app is not working only to find out its a
            missing semicolon. Multiple eyeballs will ensure you spend less time
            bug finding and concentrate on coding.
          </p>
          <div className="action_btn">
            <Button className="btn-lg" variant="warning">
              Start Now
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <h1 className="text-center">
            <FaFileCode className="faicon_code" />
            Codebase Review
          </h1>
          <p className="text-center">
            Structuring codebases is both an art and a science. The structure of
            a codebase will determine if an app will be scalable, maintainable,
            and futureproof. Get practical advice for your next product.
          </p>
          <div className="action_btn">
            <Button className="btn-lg" variant="warning">
              Start Now
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <div>
            <h1 className="text-center">
              <FaRegNewspaper className="faicon_bug" />
              Learning
            </h1>
          </div>
          <p className="text-center">
            Its common for one to spend hours knocking their heads aganist the
            wall wondering why an app is not working only to find out its a
            missing semicolon. Multiple eyeballs will ensure you spend less time
            bug finding and concentrate on coding.
          </p>
          <div className="action_btn">
            <Button className="btn-lg" variant="warning">
              Start Now
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <h1 className="text-center">
            <FaPeopleCarry className="faicon_code" />
            Engage
          </h1>
          <p className="text-center">
            Structuring codebases is both an art and a science. The structure of
            a codebase will determine if an app will be scalable, maintainable,
            and futureproof. Get practical advice for your next product.
          </p>
          <div className="action_btn">
            <Button className="btn-lg" variant="warning">
              Start Now
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Subsection;
