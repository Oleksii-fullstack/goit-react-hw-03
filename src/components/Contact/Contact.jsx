import s from "./Contact.module.css";

const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
