import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
  return (
    <div className="works">
      {/* left side */}
      <div className="awesome">
        <span>Works For All of these</span>
        <span>Technologies</span>
        <span>
          Experienced working in React , FireBase ,<br />
          And Hands on with Latest Demanding DevOps Tools ,<br />
          Such as Docker , Kubernetes , Ansible ,Terraform etc.
        </span>

        <button className="button s-button">Hire Me</button>
        <div
          className="blur s-blur"
          style={{
            background: "rgb(180, 231, 255)",
            position: "relative",
            top: "-5rem",
            left: "-4rem",
          }}
        ></div>
      </div>
      {/* right side*/}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
