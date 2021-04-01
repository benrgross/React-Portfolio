import React from "react";
import "./about.css";

function About() {
  return (
    <div id="about" className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-sm-0 col-md-2 col-lg-2"></div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <main className="container text-box">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div>
                  <div>
                    <h1>Benjamin Gross</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="card img-card-top">
                      <img
                        id="ben-pic"
                        src="https://media-exp1.licdn.com/dms/image/C5603AQGoBEegJo3xUg/profile-displayphoto-shrink_800_800/0/1582653629898?e=1622678400&v=beta&t=3nOtJrB9i28cfql0MWIh7bA3vwYzLpJSm34ec8h5yD8"
                        classNAme="img-thumbnail"
                        alt="Profile-Pic"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <p>
                      Full Stack Web Developer with a background in Horticulture
                      and Landscape design. Equipped with an education in
                      Molecular Biology, and experience running a small
                      business, I am comfortable assessing problems from minute
                      details to a global scale.
                      <br></br> <br></br>I am effective at integrating my design
                      experience and business management skills to applications.
                      Known amongst my colleagues as being great with clients
                      and an excellent communicator. I love surfing and spend
                      most of my free time outdoors.
                    </p>
                  </div>
                </div>
                <div className="container text-center">
                  <p id="links" className="ml-auto">
                    <a href="mailto:benrgross@gmail.com<">
                      Email: benrgross@gmail.com,
                    </a>{" "}
                    <span> </span>
                    <a href="https://github.com/benrgross">
                      Git Hub Profile{" "}
                    </a>{" "}
                    <br />
                    <a href="https://www.linkedin.com/in/ben-gross-b5a91192/">
                      Linkedin Profile,
                    </a>{" "}
                    <span> </span>
                    <a href="https://docs.google.com/document/d/1TzAtCA1VZ-Hwla-Eu1iZZKa_YyqR0X4IuxOMIfFjS60/export?format=pdf">
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="col-sm-0 col-md-2 col-lg-2"></div>
      </div>
    </div>
  );
}

export default About;
