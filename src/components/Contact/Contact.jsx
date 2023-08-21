import PropTypes from 'prop-types';
import { StyledButton } from 'components/ContactForm/ContactForm.styled';
import { StyledContact } from './Contact.styled';

export const Contact = ({
  contact: { id, name, number },
  ordinal,
  onDelete,
}) => {
  return (
    <StyledContact>
      <p>
        {ordinal}. {name}: {number}
      </p>
      <StyledButton onClick={() => onDelete(id)}>Delete</StyledButton>
    </StyledContact>
  );
};

Contact.propTypes = {
  ordinal: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
