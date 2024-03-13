import React from 'react';
import styled from 'styled-components';

const ContactItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;

const RemoveButton = styled(Button)`
  background-color: red;
  color: white;
`;

const AddButton = styled(Button)`
  background-color: #2ecc71;
  color: white;
`;

const EditButton = styled(Button)`
  background-color: #3498db;
  color: white;
`;

const Background = styled.div`
  background-image: url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function ContactList({ contacts, removeContact, editContact }) {
  return (
    <Background>
      {contacts.map((contact, index) => (
        <ContactItem key={index}>
          <p style={{ marginBottom: '10px' }}>Nome: {contact.name}</p> 
          <p style={{ marginBottom: '10px' }}>Email: {contact.email}</p> 
          <p style={{ marginBottom: '10px' }}>Telefone: {contact.phone}</p> 
          <RemoveButton onClick={() => removeContact(index)}>Remover</RemoveButton>
          <EditButton onClick={() => editContact(index, { name: 'Novo Nome', email: 'novo@email.com', phone: '999999999' })}>
            Editar
          </EditButton>
        </ContactItem>
      ))}
    </Background>
  );
}

export default ContactList;

