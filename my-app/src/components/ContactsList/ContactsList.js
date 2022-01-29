import React from "react";
import { useSelector, useDispatch } from "react-redux";
import contactAction from "../../redux/reduxApi/contact-actions";
import { getVisibleContact } from "../../redux/reduxApi/PhoneBook-selectors";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BsBackspaceFill } from "react-icons/bs";
import {
  ContactList,
  ListItem,
  Paragraph,
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
          <HiArrowNarrowRight />
          <Paragraph> {name}</Paragraph>
          <Paragraph> {number}</Paragraph>
          <ContactButton onClick={() => onDeleteContact(id)}>
            Delete <BsBackspaceFill />
          </ContactButton>
        </ListItem>
      ))}
    </ContactList>
  );
};

export default ContactsList;
