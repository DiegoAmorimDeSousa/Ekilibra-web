import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: white;
`;

export const Content = styled.div`
  padding: 40px 250px;
  background: white;
`;

export const Title = styled.div`
  font-size: 30px;
  background: white;
  font-family: "Roboto Mono", serif;
  font-weight: bold;
`;

export const SubTitle = styled.div`
  font-size: 18px;
  background: white;
  font-family: "Roboto Mono", serif;
  font-weight: bold;
  margin: 40px 0 20px;
`;

export const GroupMember = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 3px solid #f4c752;
`;

export const InfoMember = styled.div`
  background: white;
  display: flex;
  align-items: center;
`;

export const NameAndStatus = styled.div`
  background: white;
`;

export const Name = styled.div`
  font-size: 15px;
  background: white;
  font-family: "Roboto Mono", serif;
`;

export const Status = styled.div`
  font-size: 12px;
  background: white;
  font-family: "Roboto Mono", serif;
`;

export const Question = styled.div`
  background: gainsboro;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 0 15px 0 0;
  cursor: pointer;

  svg {
    color: #333;
    background: gainsboro;
  }
`;

export const ProfileButton = styled.div`
  background: red;
  width: 40px; 
  height: 40px;
  border-radius: 50px;
  cursor: pointer;
  margin: 0 10px 0 0;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 24px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  background: white;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  background: white;
  font-family: "Roboto Mono", serif;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  background: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
`;

export const InputGroup = styled.div`
  margin-bottom: 12px;
  background: white;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 4px;
  background: white;
  font-family: "Roboto Mono", serif;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background: white;
  font-family: "Roboto Mono", serif;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background: white;
`;

export const SubmitButton = styled.button`
  font-family: "Roboto Mono", serif;
  padding: 12px;
  background-color: #f4c752;
  color: black;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fad067;
  }
`;