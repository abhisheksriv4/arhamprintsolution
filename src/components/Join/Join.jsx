import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
import Address from "../../assets/address.png"
import Phone from "../../assets/phone.png"
import Web from "../../assets/web.png"

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ypxy4qj",
        "template_tpzvz4g",
        form.current,
        "jMoH9WhIxaWuKcJ_N"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <hr />
      <div>
        <span className="stroke-text">Let's</span>
        <span>Get In</span>
        <span className="stroke-text">Touch</span>
      </div>

      <div className="contact">
        <div className="left-j">
          <form ref={form} className="email-container" onSubmit={sendEmail}>
            <div className="name-email">
                <input
                type="name"
                name="user_name"
                placeholder="Your Name"
                />
                <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                />
            </div>
            <textarea
              type="message"
              name="user_message"
              placeholder="Your Message"
            />
            <button className="btn btn-j">Join Now</button>
          </form>
        </div>
        <div className="right-j">
            <div className="information">
                <img src={Address} alt="" />
                <div className="info">
                    <span>Our Address</span>
                    <span>1234 City, State, Country</span>
                </div>
            </div>

            <div className="information">
                <img src={Phone} alt="" />
                <div className="info">
                    <span>Phone Number</span>
                    <span>+91 1234567890</span>
                </div>
            </div>

            <div className="information">
                <img src={Web} alt="" />
                <div className="info">
                    <span>Email Address</span>
                    <span>email: email@company.com <br /> support: support@company.com</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
