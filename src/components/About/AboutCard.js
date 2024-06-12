import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "initial" }}>
            Hi Everyone, I am <span className="purple">Shivangi</span>
            from <span className="purple">Aligarh, India change krlena ise baad me</span>
            <br />
            <br />
            <p className="purple">Experience</p>
            <ul>
              <li>
                 Hackathon at Sharda University
                <br /> Aug 2023 .
              </li>
              <br />
              <li>
                Learned Python,C,Java at Sharda University 
                <br /> jul 2022 - May 2024 .
              </li>
            </ul>
            <p className="purple">Education</p>
            <ul>
              <li>
                Schooling at Heritage International School,Aliagrh
                <br />2007-2022
              </li>
              <br />
              
              <li>
                Bachelors of technology in information technology at 
                Sharda University,Greater Noida
              
                <br />Aug 2022 - Apr 2026
              </li>
            </ul>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shivangi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
