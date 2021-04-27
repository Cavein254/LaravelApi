import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Heropic from "./img/hero3.jpg";
import Logolg from "./img/logolg.png";
import "./styles.css";
function Hero() {
  return (
    <div className="hero">
      <Row>
        <Col>
          <div className="hero_content">
            <h1>
              T
              <span>
                <Image src={Logolg} className="logolg" />
                Code
              </span>
            </h1>
          </div>
          <div className="hero_text">
            <h4>A Place for Creative People to Meet</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={Heropic} className="hero_pic" />
        </Col>
      </Row>
    </div>
  );
}

export default Hero;
