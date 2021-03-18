import React from "react";
import Image from "../Image/Image";
import { useBoolean } from "react-hanger";
import "./style.css";

function Card({ name, web, repo, image, tech }) {
  const showInfo = useBoolean(false);

  //   const handleZoom = () => {};

  return (
    <div className="col-md-4 col zoom">
      <div
        className="card container-fluid img-container "
        style={{ width: "20rem", padding: "0px" }}
      >
        {/* <img
          src={image}
          className="card-img-top img"
          alt={name}
          onClick={showInfo.toggle}
        /> */}
        <Image source={image} />
        {showInfo.value ? (
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
              <b>Technologies: </b>
              {tech.map((tech) => (
                <span className="card-text"> {`${tech}   `}</span>
              ))}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;
