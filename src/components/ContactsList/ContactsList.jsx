import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { StyledContactsList } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <StyledContactsList>
      {contacts.map((contact, idx) => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            ordinal={idx + 1}
            onDelete={onDelete}
          />
        );
      })}
    </StyledContactsList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
