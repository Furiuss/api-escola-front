import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-weight: 700;
  }

  input {
    height: 40px;
    background-color: ${colors.secondaryColor};
    border-radius: 5px;
    font-size: 18px;
    border: 1px solid transparent;
    padding: 0 10px;
    transition: 0.15s;

    &:focus {
      border: 3px solid ${colors.primaryColor};
    }
  }

  button {
    font-weight: 700;
    font-size: 16px;
  }
`;
