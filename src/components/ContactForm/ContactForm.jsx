import { useState } from "react";
import s from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const [contact, setContact] = useState({
    name: "",
    number: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact);
  };

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        <span>Number</span>
        <input type="text" name="number" onChange={handleChange} />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
