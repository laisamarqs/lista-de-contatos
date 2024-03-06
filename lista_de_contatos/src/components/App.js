// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ContactList from './ContactList';
import AddContactForm from './AddContactForm';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const removeContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const editContact = (index, updatedContact) => {
    const newContacts = [...contacts];
    newContacts[index] = updatedContact;
    setContacts(newContacts);
  };

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <AddContactForm addContact={addContact} />
      <ContactList contacts={contacts} removeContact={removeContact} editContact={editContact} />
    </div>
  );
}

export default App;
