import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.map((data) => (
        <ContactItem {...data} key={data.id} id={data.id} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ContactList;
