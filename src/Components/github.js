import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col md={8} style={{ paddingLeft: "20px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="lightgreen">Code</strong>
        </h1>
        <GitHubCalendar
          username="Mrlapcha"
          blockSize={15}
          blockMargin={5}
          color="#008000"
          fontSize={16}
        />
      </Col>
    </Row>
  );
}

export default Github;
