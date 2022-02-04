import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../redux/phoneBook/phoneBook-selectors";
import phoneBookAction from "../../redux/phoneBook/phoneBook-actions";
import {
  ContactsForm,
  ContactsMark,
  ContactsInput,
  ContactsButton,
  ContactsSpan,
} from "./ContactForm.styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const items = useSelector(getContact);

  const onChangeInput = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const onCheckNameValue = (contactName) => {
    if (
      items.some(
        (contact) => contact.name.toLowerCase() === contactName.toLowerCase()
      )
    ) {
      toast(`${name} is already in contacts`);
      return;
    }
    dispatch(phoneBookAction.addContact(name, number));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    onCheckNameValue(e.target.name.value);
    setName("");
    setNumber("");
  };

  return (
    <>
      <ContactsForm onSubmit={onSubmitForm}>
        <ContactsMark>
          <ContactsSpan>Name</ContactsSpan>
          <ContactsInput
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onChangeInput}
          />
        </ContactsMark>
        <ContactsMark>
          <ContactsSpan> Number </ContactsSpan>
          <ContactsInput
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChangeInput}
          />
        </ContactsMark>
        <ContactsButton type="submit">add contact</ContactsButton>
      </ContactsForm>
    </>
  );
}
