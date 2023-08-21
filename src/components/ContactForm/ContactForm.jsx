import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  FormLabelStyled,
  FormStyled,
  StyledButton,
} from './ContactForm.styled';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  createContact = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const contactData = { id: nanoid(), name: name, number: number };
    this.props.onSubmit(contactData);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <FormStyled onSubmit={this.createContact}>
          <FormLabelStyled>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormLabelStyled>
          <FormLabelStyled>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </FormLabelStyled>
          <StyledButton type="submit">Add contact</StyledButton>
        </FormStyled>
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
