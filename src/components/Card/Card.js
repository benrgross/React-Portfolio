import React from "react";
import Image from "../Image/Image";
import { useBoolean } from "react-hanger";
import "./style.css";

function Card({ name, repo, web, image, tech, gif }) {
  const showInfo = useBoolean(false);
  const showGif = useBoolean(false);

  return (
    <div className=" col-sm-12 col-md-3 col-lg-3  d-flex justify-content-center image-col">
      <div className="" style={{ width: "20.5rem", padding: "0px" }}>
        <Image
          showGif={showGif}
          img={image}
          gif={gif}
          name={name}
          onClick={showInfo.toggle}
        />
        {showInfo.value ? (
          <div
            style={{ padding: "5px" }}
            className="card-body info-card shadow-lg transform"
          >
            <p className="card-text">
              <a href={web}>Deployed Site </a>
            </p>
            <p className="card-text">
              <a href={repo}> GitHub Repo </a>
            </p>
            <p>
              {" "}
              <b>Technologies: </b>
              {tech.map((tech) => (
                <span className="card-text"> {tech.join(", ")}</span>
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
