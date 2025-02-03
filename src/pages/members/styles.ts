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