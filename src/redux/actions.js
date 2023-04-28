import { nanoid } from '@reduxjs/toolkit';

export const addContact = (name, number) => {
  return {
    type: 'addContact',
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'deleteContact',
    payload: contactId,
  };
};

export const filterContacts = searchTerm => {
  return {
    type: 'filterContacts',
    payload: searchTerm,
  };
};
