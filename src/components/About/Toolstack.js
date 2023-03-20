import React from "react";
import { Col, Row } from "react-bootstrap";
import {

  SiVisualstudiocode,
  SiPostman,

  SiVercel,
  SiFigma,
  SiMicrosoftoffice,
  SiNetlify,
  SiLeetcode,
} from "react-icons/si";
import {FaGithub}from "react-icons/fa"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLeetcode/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
      </Col>
    </Row>
  );
}

export default Toolstack;
