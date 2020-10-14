import React from "react";
import Header from "./header";
import data from "./yourdata";
import { FaEnvelope, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

function ContactPage() {
  return (
    <div>
      <Header name={data.name} contactEmail={data.contactEmail}></Header>
      <div className="contact-page">
        <h1>Get in touch.</h1>
        <form>
          <input name="Name" placeholder="Name" autoComplete="off" />
          <input name="email" placeholder="Email" autoComplete="off" />
          <textarea name="textarea" placeholder="Message" rows="10"></textarea>
          <button>Submit</button>
        </form>
        <div className="contact_container" style={{ top: "5rem" }}>
          <ul>
            <li>
              <a href="#">
                <FaEnvelope></FaEnvelope>
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a href="#">
                <FaGithub></FaGithub>
              </a>
            </li>
            <li>
              <a href="#">
                <FaCodepen></FaCodepen>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
