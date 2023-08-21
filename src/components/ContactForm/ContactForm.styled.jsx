import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  border-radius: 8px;
  background-color: #fff;
  padding: 10px 8px;
  box-shadow: 0px 3px 12px 3px rgba(0, 0, 0, 0.3);

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus-within {
    background-color: #f3f3f3;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

export const FormLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 7px;

  input {
    box-sizing: border-box;
    border: 2px solid #bbb8b8;
    border-radius: 4px;

    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus-visible {
      outline: none;
      border: 2px solid grey;
    }
  }
`;

export const StyledButton = styled.button`
  padding: 4px 6px;
  border: 1px solid grey;
  border-radius: 4px;
  color: #000000;
  background-color: #dbdbdb;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
    background-color: grey;
  }
`;
