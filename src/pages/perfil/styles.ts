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

export const ProfilePictureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background: white;
  margin: 25px 0;
`;

export const ProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #f4c752;
`;

export const ChangePictureButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background: #f4c752;
  color: black;
  font-family: "Roboto Mono", serif;
  font-weight: bold;
  border: none;
  width: 200px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #f4c752;
  }
`;

export const InputGroup = styled.div`
  text-align: left;
  margin-bottom: 16px;
  background: white;
`;

export const Label = styled.label`
  display: block;
  font-family: "Roboto Mono", serif;
  font-weight: bold;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  font-size: 18px;
  color: #555;
  background: white;
`;

export const Input = styled.input`
  width: 100%;
  font-family: "Roboto Mono", serif;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  transition: border-color 0.3s;
  font-size: 16px;
  background: white;

  &:focus {
    border-color: #3b82f6;
    outline: none;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

export const SaveButton = styled.button`
  padding: 10px 16px;
  margin-top: 10px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #059669;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 16px;
  margin-top: 10px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 10px;

  &:hover {
    background: #dc2626;
  }
`;
