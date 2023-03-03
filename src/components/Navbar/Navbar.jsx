import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Shivendra Pratap</div>
        <Toggle />
        {/* <span>toggle</span> */}
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              smooth={true}
              activeClass="activeClass"
              to="Navbar"
            >
              <li>Home</li>
            </Link>

            <Link spy={true} smooth={true} to="Services">
              <li>Services</li>
            </Link>

            <Link spy={true} smooth={true} to="Experience">
              <li>Experience</li>
            </Link>

            <Link spy={true} smooth={true} to="Portfolio">
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">
          <Link spy={true} smooth={true} to="Contact">
            Contact
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
