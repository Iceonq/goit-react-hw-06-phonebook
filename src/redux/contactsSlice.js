import { createSlice, nanoid } from '@reduxjs/toolkit';

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

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts: (state, action) => {
      state.filteredContacts = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
