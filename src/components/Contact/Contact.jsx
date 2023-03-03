import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [user_name, setUserName] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const [done, setDone] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (user_name !== "" && user_email !== "" && message !== "") {
      emailjs
        .sendForm(
          "service_rr7t0dw",
          "template_uq8ml58",
          form.current,
          "AE-Elp8vFZrRKabwf"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            setUserName("");
            setUserEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="contact" id="Contact">
      <div className="c-left">
        <div className="awesome">
          <span
            style={{
              color: darkMode ? "white" : "black",
            }}
          >
            Get in Touch
          </span>
          <span style={{textAlign:"center"}}>Contact Me</span>
        </div>
        <div
          className="blur s-blur"
          style={{
            background: "rgb(166, 227, 255)",
            position: "absolute",
            top: "5rem",
            left: "-8rem",
          }}
        ></div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name.."
            name="user_name"
            className="user"
            value={user_name}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email.."
            name="user_email"
            className="user"
            value={user_email}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message.."
            cols="30"
            rows="2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input type="Submit" value="send" name="submit" className="button" />
          <div
            className="blur s-blur"
            style={{
              background: "var(--purple)",
              position: "absolute",
              top: "0rem",
              left: "15rem",
            }}
          ></div>
          <span>{done ? "Thanks For Contacting" : " "}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
