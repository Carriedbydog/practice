import React, { useEffect, useState } from 'react';

import { ContactList } from './Contacts/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { StyledSubTitle, StyledTitle, StyledWrapper } from 'styles/App.styled';
import { Form } from './ContactForm/Form';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const item = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );

    if (item) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    setContacts(prev => [...prev, contact]);
  };

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };
  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const handleContactDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <StyledWrapper>
        <StyledTitle>PhoneBook</StyledTitle>
        <Form handleAddContact={handleAddContact} />
        <StyledSubTitle>Contacts</StyledSubTitle>
        <Filter inputFilterData={handleChangeFilter} filterValue={filter} />
        <ContactList
          contacts={filterContacts()}
          onDelete={handleContactDelete}
        />
      </StyledWrapper>
    </div>
  );
};
