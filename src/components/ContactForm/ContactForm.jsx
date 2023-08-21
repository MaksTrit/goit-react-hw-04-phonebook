import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  FormLabelStyled,
  FormStyled,
  StyledButton,
} from './ContactForm.styled';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const createContact = evt => {
    evt.preventDefault();
    const contactData = { id: nanoid(), name: name, number: number };
    onSubmit(contactData);
    setName('');
    setNumber('');
  };

  return (
    <>
      <h1>Phonebook</h1>
      <FormStyled onSubmit={createContact}>
        <FormLabelStyled>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
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
            value={number}
            onChange={handleChange}
          />
        </FormLabelStyled>
        <StyledButton type="submit">Add contact</StyledButton>
      </FormStyled>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
