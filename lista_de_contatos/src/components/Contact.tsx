import React, { useState } from 'react';
import ContactList from './ContactList';
import AddContactForm from './AddContactForm';

interface Contact {
  
  name: string;
  email: string;
  phone: string;
}

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) => {
    setContacts([...contacts, contact]);
  };

  const removeContact = (index: number) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const editContact = (index: number, updatedContact: Contact) => {
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
