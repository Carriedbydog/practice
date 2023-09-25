const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [],
  filter: '',
};
const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, actions) {
      state.contacts.push(actions.payload);
    },
    setFilter(state, actions) {
      state.contacts(actions.payload);
    },
    deleteContact(state, actions) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== actions.payload
      );
    },
  },
});

export const contactsReducer = slice.reducer;

export const { addContact, setFilter, deleteContact } = slice.actions;
