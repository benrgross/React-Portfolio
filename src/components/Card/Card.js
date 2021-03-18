import React from "react";
import image from "../../../public/images/";

function Card({ info }) {
  return (
    <div className="card">
      {info.map((info) => {
        return (
          <>
            <img
              src="../../../public/images/weather.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">{info.name}</p>
              <p className="card-text">{info.web}</p>
              <p className="card-text">{info.repo}</p>
              <p className="card-text">{info.tech}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Card;
