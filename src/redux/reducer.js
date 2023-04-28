import { nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: nanoid(), name: 'Alexander Weng', number: 997 },
    { id: nanoid(), name: 'Mariush Weng', number: 991 },
    { id: nanoid(), name: 'Ida Weng', number: 992 },
    { id: nanoid(), name: 'Olga Weng', number: 993 },
    { id: nanoid(), name: 'Hahmet Weng', number: 994 },
    { id: nanoid(), name: 'Wariat Weng', number: 995 },
  ],
  filteredContacts: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addContact':
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            id: nanoid(),
            name: action.payload.name,
            number: action.payload.number,
          },
        ],
      };
    case 'deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'filterContacts':
      return {
        ...state,
        filteredContacts: action.payload,
      };
    default:
      return state;
  }
};
