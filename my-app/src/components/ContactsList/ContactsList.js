import React from "react";
import { useSelector, useDispatch } from "react-redux";
import contactAction from "../../redux/phoneBook/contact-actions";
import { getVisibleContact } from "../../redux/phoneBook/phoneBook-selectors";
import {
  ContactList,
  ListItem,
  Span,
  ContactButton,
} from "./ContactList.styled";

const ContactsList = () => {
  const contact = useSelector(getVisibleContact);

  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(contactAction.deleteContact(id));

  return (
    <ContactList>
      {contact.map(({ id, number, name }) => (
        <ListItem key={id}>
          <Span> {name}</Span>
          <Span> {number}</Span>
          <ContactButton onClick={() => onDeleteContact(id)}>
            Delete
          </ContactButton>
        </ListItem>
      ))}
    </ContactList>
  );
};

export default ContactsList;
