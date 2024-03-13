export const addContact = (contact) => ({
    type: 'ADD_CONTACT',
    payload: contact
  });
  
  export const removeContact = (index) => ({
    type: 'REMOVE_CONTACT',
    payload: index
  });
  
  export const editContact = (index, updatedContact) => ({
    type: 'EDIT_CONTACT',
    payload: {
      index,
      updatedContact
    }
  });