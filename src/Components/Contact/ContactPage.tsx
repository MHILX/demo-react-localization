import React from "react";
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Welcome to the contact page!</p>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}