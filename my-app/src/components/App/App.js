import ContactList from "../ContactsList";
import ContactForm from "../ContactForm";
import Filter from "../Filter/Filter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <ToastContainer />
      <h2>Contacts</h2>
      {<Filter />}
      {<ContactList />}
    </>
  );
}
