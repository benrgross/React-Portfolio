import React from "react";
import "./about.css";

function About() {
  return (
    <div id="about" className="container d-flex justify-content-center">
      <main className="container text-box">
        <div>
          <div>
            <h1>Benjamin Gross</h1>
            <img
              id="ben-pic"
              src="https://scontent-lga3-2.xx.fbcdn.net/v/t31.0-8/1909372_10202070402856112_652077199_o.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_ohc=372HNjBqmb0AX8NcSNQ&_nc_ht=scontent-lga3-2.xx&oh=797e1f6f25e88c2cc19310a08912a284&oe=605AA92F"
              classNAme="img-thumbnail"
              alt="Profile-Pic"
            />
            <br></br>
            <p>
              Full Stack Web Developer with a background in Horticulture and
              Landscape design. Equipped with an education in Molecular Biology,
              and experience running a small business, I am comfortable
              assessing problems from minute details to a global scale.
              <br></br> <br></br>I am effective at integrating my design
              experience and business management skills to applications. I am
              known amongst my colleagues as being great with clients and being
              an excellent communicator.
            </p>
            <br></br>
            <br></br>
            <p id="links" className="ml-auto">
              <a href="mailto:benrgross@gmail.com<">
                Email: benrgross@gmail.com
              </a>{" "}
              <br />
              <a href="https://github.com/benrgross">Git Hub Profile</a> <br />
              <a href="https://www.linkedin.com/in/ben-gross-b5a91192/">
                Linkedin Profile
              </a>
              <br />
              <a href="https://docs.google.com/document/d/1TzAtCA1VZ-Hwla-Eu1iZZKa_YyqR0X4IuxOMIfFjS60/export?format=pdf">
                Download Resume
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
