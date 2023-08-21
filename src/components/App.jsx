import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = e => {
    setFilter(e.target.value);
  };

  const addContact = newContact => {
    const addingName = newContact.name.toLowerCase();
    contacts.some(contact => contact.name.toLowerCase() === addingName)
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const searchContact = () => {
    const searchName = filter.toLowerCase();
    if (!searchName.trim()) {
      return contacts.sort((prevContact, nextContact) =>
        prevContact.name.localeCompare(nextContact.name)
      );
    }
    const searchedContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(searchName)
    );
    return searchedContacts.sort((prevContact, nextContact) =>
      prevContact.name.localeCompare(nextContact.name)
    );
  };

  return (
    <Layout>
      <GlobalStyle />
      <ContactForm onSubmit={addContact} />
      <Filter onChange={handleSearch} value={filter} />
      {contacts.length ? (
        <ContactsList contacts={searchContact()} onDelete={deleteContact} />
      ) : (
        <h3>There is no one contact</h3>
      )}
    </Layout>
  );
};
