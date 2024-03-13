import { combineReducers } from 'redux';

const initialState = {
  contacts: []
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter((contact, index) => index !== action.payload)
      };
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact, index) => {
          if (index === action.payload.index) {
            return action.payload.updatedContact;
          }
          return contact;
        })
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export default combineReducers({
  contacts: contactsReducer
});