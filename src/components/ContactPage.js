import React from "react";
import Header from "./header";
import data from "./yourdata";

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
      </div>
    </div>
  );
}

export default ContactPage;
