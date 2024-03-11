



import React from 'react';
import styled from 'styled-components';

const ContactItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
`;


function ContactList({ contacts, removeContact, editContact }) {
  return (
    
    <div>
      
      {contacts.map((contact, index) => (
        <ContactItem key={index}>
          <p>Nome: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Telefone: {contact.phone}</p>
          <button onClick={() => removeContact(index)}>Remover</button>
          <button onClick={() => editContact(index, { name: 'Novo Nome', email: 'novo@email.com', phone: '999999999' })}>
            Editar
          </button>
        </ContactItem>
      ))}
    </div>
  );
}

export default ContactList;
