const { configureStore } = require('@reduxjs/toolkit');
const { contactsReducer } = require('./phonebook/slice');

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
