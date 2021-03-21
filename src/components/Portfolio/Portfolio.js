import React, { useState } from "react";
import "./style.css";
import Card from "../Card/Card";
import Row from "../Row";
import Container from "../Cotainer/Container";
// import Col from "../Col";
import info from "../../utils/portfolio.json";


function Portfolio() {
  const [infoState] = useState({
    info,
  });

  return (
    <div className="container">
      <Row className="port-card">
        {infoState.info.map((info) => (
          <Card
            key={info.name}
            name={info.name}
            web={info.web}
            repo={info.repo}
            image={info.image}
            tech={info.tech}
            gif={info.gif}
          />
        ))}
        {/* <ImageZoom /> */}
      </Row>
    </div>
  );
}

export default Portfolio;
