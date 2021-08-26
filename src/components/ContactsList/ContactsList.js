import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

import { ContactsListItem } from "../ContactsListItem/ContactsListItem";

function ContactsList({ contacts, deleteContact }) {
  return (
    <ul class={s.listContacts}>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          name={name}
          id={id}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
