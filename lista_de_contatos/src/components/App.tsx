import React, { useState } from 'react';
import styled from 'styled-components';
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
    <Background>
      <h1>Lista de Contatos</h1>
      <AddContactForm addContact={addContact} />
      <ContactList contacts={contacts} removeContact={removeContact} editContact={editContact} />
    </Background>
  );
}

const Background = styled.div`
  background-image: url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App;

