import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  addContact = newContact => {
    const addingName = newContact.name.toLowerCase();
    this.state.contacts.some(contact =>
      contact.name.toLowerCase().includes(addingName)
    )
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  searchContact = () => {
    const { filter, contacts } = this.state;
    const searchName = filter.toLowerCase();
    const searchedContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(searchName)
    );
    return searchedContacts.sort((prevContact, nextContact) =>
      prevContact.name.localeCompare(nextContact.name)
    );
  };

  render() {
    const { filter } = this.state;
    const contactsList = this.searchContact();
    return (
      <Layout>
        <GlobalStyle />
        <ContactForm onSubmit={this.addContact} />
        <Filter onChange={this.handleChange} value={filter} />
        {this.state.contacts.length ? (
          <ContactsList contacts={contactsList} onDelete={this.deleteContact} />
        ) : (
          <h3>There is no one contact</h3>
        )}
      </Layout>
    );
  }
}
