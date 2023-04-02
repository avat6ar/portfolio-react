import React, { useRef, useState } from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import AOS from "aos";

const Contact = () => {
  AOS.init();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      e.target.reset();
    }, 2000);
    emailjs
      .sendForm(
        "service_duu2g9l",
        "template_wlwe2yb",
        form.current,
        "7ezx_gQW8aZ2QSmOW"
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
    <div className="contact">
      <div className="row align-items-center justify-content-between">
        <div
          className="col-md-6 mb-sm-2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="mb-3">Contact Me</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
            {loading && (
              <div className="loading_form">
                <div className="sk-circle">
                  <div className="sk-circle1 sk-child"></div>
                  <div className="sk-circle2 sk-child"></div>
                  <div className="sk-circle3 sk-child"></div>
                  <div className="sk-circle4 sk-child"></div>
                  <div className="sk-circle5 sk-child"></div>
                  <div className="sk-circle6 sk-child"></div>
                  <div className="sk-circle7 sk-child"></div>
                  <div className="sk-circle8 sk-child"></div>
                  <div className="sk-circle9 sk-child"></div>
                  <div className="sk-circle10 sk-child"></div>
                  <div className="sk-circle11 sk-child"></div>
                  <div className="sk-circle12 sk-child"></div>
                </div>
              </div>
            )}
          </form>
        </div>
        <div className="col-md-4" data-aos="fade-left" data-aos-duration="1000">
          <div className="contact_option">
            <MdOutlineMail className="contact_option_icon" />
            <h5 className="my-2">Email</h5>
            <p className="m-0">abdullah2662888@gmail.com</p>
            <a href="mailto:abdullah2662888@gmail.com" target="_blank">
              Sen a message
            </a>
          </div>
          <div className="contact_option">
            <RiMessengerLine className="contact_option_icon" />
            <h5 className="my-2">Messenger</h5>
            <p className="m-0">Abdullah Mohamed</p>
            <a href="https://m.me/avat6ar" target="_blank">
              Sen a message
            </a>
          </div>
          <div className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h5 className="my-2">WhatsApp</h5>
            <p className="m-0">+201020487654</p>
            <a
              href="https://api.whatsapp.com/send?phone=201020487654"
              target="_blank"
            >
              Sen a message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
