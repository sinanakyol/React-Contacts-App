import { useState, useEffect } from "react";

import List from "./List";
import Form from "./Form";
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Sinan",
      phone_number: "123123",
    },
    {
      fullname: "Ali",
      phone_number: "456456",
    },
    {
      fullname: "Nazlı",
      phone_number: "987876",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>My Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
