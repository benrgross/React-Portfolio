import React from "react";
import "./style.css";

function Card({ name, web, repo, image, tech }) {
  return (
    <div className="col-md-4 mt-0">
      <div
        className="card container-fluid img-container "
        style={{ width: "18rem", padding: "0px" }}
      >
        {/* <div className="card-header">{name}</div> */}
        <img src={image} className="card-img-top img-thumbnail" alt="{name}" />
        <div style={{ padding: "5px" }} className="card-body">
          <p className="card-text">
            <a href={web}>Deployed Site</a>
          </p>
          <p className="card-text">
            {" "}
            <a href={repo}>GitHub Repo</a>
          </p>
          <p>
            {" "}
            Technologies:
            {tech.map((tech) => (
              <span className="card-text"> {`${tech}, `}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
