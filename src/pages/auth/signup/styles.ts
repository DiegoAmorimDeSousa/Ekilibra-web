import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  border-radius: 30px;
  /* margin: 100px 0; */
`;

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 15px;
  object-fit: contain;
  margin-top: 100px;
`;

export const Form = styled.form`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 10px;
  max-width: 300px;
  width: 70%;
  padding: 24px;  
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  background: white;
  padding: 24px 10px;
  border-bottom: 3px solid #f5f5f5;
  border-radius: 10px 10px 0 0;
  font-family: "Roboto Mono", serif;
  font-size: 25px;
`;

export const InputGroup = styled.div`
  margin-bottom: 16px;
  background: white;
  padding: 0 17px 0 0px;
  font-family: "Roboto", serif;
  letter-spacing: 1.5px;

  .input {
    background: white;
    margin-top: 8px;
    width: 100%;
    padding: 8px;
    outline: none !important;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    transition: border-color 0.3s;
    font-family: "Roboto", serif;

    &:focus {
      border-color: #3b82f6;
    }
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: white;
  width: 106%;
`;

export const TogglePasswordButton = styled.button`
  background: white;
  border: none;
  position: absolute;
  right: 10px;
  bottom: 7px;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    background: white;
  }
`;

export const InputButtons = styled.div`
  font-family: "Roboto", serif;
  background: white;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: space-between;

  .first-button {
    background: white;
    border: solid 1px #f4c752;

    &:hover {
      background-color: #fce8bb;
    }
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: medium;
  background: white;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  background: white;
  margin-top: 8px;
  width: 100%;
  padding: 8px;
  outline: none;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.hasError ? '#f87171' : '#d1d5db')};
  transition: border-color 0.3s;
  font-family: "Roboto", serif;

  &:focus {
    border-color: #3b82f6;
  }
`;

export const ErrorMessage = styled.p`
  color: #f87171;
  font-size: 0.875rem;
  margin-top: 4px;
`;

export const GoogleProvider = styled.div`
  width: 100%;
  background: white;
`;

export const SubmitButton = styled.button`
  padding: 12px;
  background-color: #f4c752;
  color: black;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 24px 0 0 0;

  &:hover {
    background-color: #fad067;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .loading-icon {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;