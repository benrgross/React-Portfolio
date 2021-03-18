import Card from "../Card/Card";
import React, { useState } from "react";
import info from "../../utils/portfolio.json";

import "./style.css";

function Portfolio() {
  const [infoState] = useState({
    info,
  });

  console.log(info);
  return (
    <div className="container">
      <Card info={infoState.info} />
    </div>
  );
}

export default Portfolio;
