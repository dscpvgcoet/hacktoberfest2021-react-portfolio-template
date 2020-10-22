import React from "react";
import Contact from "./Contact";
import data from "./yourdata";

const About = () => {
  return (
    <div>
      <div className="about_container">
        <h1>{data.aboutTitle}</h1>
        <p>{data.aboutPara}</p>
        <div className="about_contact">
          <Contact
            contactEmail={data.contactEmail}
            contactPara={data.contactPara}
            socialLinks={data.social}
          ></Contact>
        </div>
      </div>
    </div>
  );
};
export default About;
