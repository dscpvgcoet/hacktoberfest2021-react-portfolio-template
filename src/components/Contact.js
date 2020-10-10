import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

const Contact = ({contactEmail, contactPara, socialLinks})=>{

    return (
      <div className="contact_container">
        <h1>Get in touch.</h1>
        <p>{contactPara}</p>
        <br></br>
        <a className="email_link" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
        <div className="social_links">
          <ul>
            <li>
              <a href={`mailto:${contactEmail}`}>
                <FaEnvelope></FaEnvelope>
              </a>
            </li>
            <li>
              <a href={socialLinks[0].url}>
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a href={socialLinks[1].url}>
                <FaGithub></FaGithub>
              </a>
            </li>
            <li>
              <a href={socialLinks[2].url}>
                <FaCodepen></FaCodepen>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Contact