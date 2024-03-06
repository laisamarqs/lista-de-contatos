/* eslint-disable react/prop-types */


// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const ContactItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
`;

// eslint-disable-next-line react/prop-types
function ContactList({ contacts, removeContact, editContact }) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      // eslint-disable-next-line react/prop-types, react/prop-types, react/prop-types, react/prop-types, react/prop-types, react/prop-types, react/prop-types, react/prop-types
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
