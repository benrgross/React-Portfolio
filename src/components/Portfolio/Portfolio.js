import React, { useState } from "react";
import "./style.css";
import Card from "../Card/Card";
import Row from "../Row";
// import Col from "../Col";
import info from "../../utils/portfolio.json";

function Portfolio() {
  const [infoState] = useState({
    info,
  });

  return (
    <>
      <Row className="port-card">
        {/* <Col size="md-4"> */}
        {infoState.info.map((info) => (
          <Card
            name={info.name}
            web={info.web}
            repo={info.repo}
            image={info.image}
            tech={info.tech}
          />
        ))}
        {/* </Col> */}
      </Row>
    </>
  );
}

export default Portfolio;
