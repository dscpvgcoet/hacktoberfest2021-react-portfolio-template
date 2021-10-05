import React from "react";

import { FaLinkedin, FaGithub, FaCodepen, FaDribbble } from "react-icons/fa";

function ContactPage() {
  return (
    <div>
      <div className="contact-page">
        <h1>Get in touch.</h1>
        <form>
          <input name="Name" placeholder="Name" autoComplete="off" />
          <input name="email" placeholder="Email" autoComplete="off" />
          <textarea name="textarea" placeholder="Message" rows="10"></textarea>
          <button>Submit</button>
        </form>
        <ul className="social_links" style={{display:'flex',listStyle:'none',alignItems:'center',justifyContent:'start'}}>
          <li style={{fontSize:'3em',margin:'1rem'}}>
            <a href="#">
              <FaLinkedin></FaLinkedin>
            </a>
          </li>
          <li style={{fontSize:'3em',margin:'1rem'}}>
            <a href="#">
              <FaGithub></FaGithub>
            </a>
          </li>
          <li style={{fontSize:'3em',margin:'1rem'}}>
            <a href="#">
              <FaCodepen></FaCodepen>
            </a>
          </li>
          <li style={{fontSize:'3em',margin:'1rem'}}>
            <a href="#">
              <FaDribbble></FaDribbble>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactPage;
