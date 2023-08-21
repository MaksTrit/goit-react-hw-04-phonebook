import PropTypes from 'prop-types';
import {
  FormLabelStyled,
  FormStyled,
} from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <>
      <h2>Contacts</h2>
      <FormStyled>
        <FormLabelStyled>
          Find contacts by name
          <input
            type="text"
            name="filter"
            autoComplete="off"
            placeholder="Search contacts..."
            value={value}
            onChange={onChange}
          />
        </FormLabelStyled>
      </FormStyled>
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
