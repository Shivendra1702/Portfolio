import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Experienced working in Javascript FullStack Development ,<br />
          And Hands on with Latest Demanding DevOps Tools .
        </span>

        <a href="#" download>
          <button className="button s-button">Download Resume</button>
        </a>
        <div
          className="blur s-blur"
          style={{
            background: "rgb(125, 214, 255)",
            position: "relative",
            top: "-2rem",
            left: "-5rem",
          }}
        ></div>
      </div>

      {/* right side */}
      <div className="cards">
        <div style={{ left: "21rem", top: "-2rem" }}>
          <Card
            emoji={HeartEmoji}
            heading="Frontend"
            detail="HTML, CSS, JavaScript, ReactJs, MaterialUI ,Sass"
          />
        </div>
        <div style={{ left: "4rem", top: "2rem" }}>
          <Card
            emoji={Glasses}
            heading="Backend"
            detail="NodeJs, ExpressJs, MongoDB, Mongoose"
          />
        </div>
        <div style={{ left: "17rem", top: "14rem" }}>
          <Card
            emoji={Humble}
            heading="DevOps"
            detail="AWS, Linux, Kubernetes, Docker, Ansible ,Git,Terraform"
          />
        </div>

        <div
          className="blur s-blur"
          style={{
            background: "var(--purple)",
            position: "relative",
            top: "5rem",
            left: "8rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
