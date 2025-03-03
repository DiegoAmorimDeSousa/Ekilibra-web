import styled from "styled-components";

export const Container = styled.div`
  background: white;
  padding: 20px 25px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
`;

export const ContinaerLogo = styled.div`
  background: white;
`;

export const ContinaerButtons = styled.div`
  background: white;
  display: flex;
  align-items: center;
  max-width: 600px;
  width: 100%;
  justify-content: end;
`;

export const Question = styled.div`
  background: gainsboro;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 0 30px 0 15px;
  cursor: pointer;

  svg {
    color: #333;
    background: gainsboro;
  }
`;

export const Logo = styled.img`
  width: 160px;
  height: 40px;
  object-fit: contain;
  cursor: pointer;
  background: white;
`;

export const Button = styled.div`
  background: white;
  font-family: "Roboto Mono", serif;
  width: 130px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: relative; 
  padding-bottom: 5px; 
  color: #333;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px; 
    background: #333; 
    transform: scaleX(0); 
    transform-origin: left; 
    transition: transform 0.3s ease-in-out; 
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const ProfileButton = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  cursor: pointer;
  margin: 0 15px 0 0;
  font-family: "Roboto Mono", serif;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 120px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 10;
  font-family: "Roboto Mono", serif;
`;

export const DropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  text-align: left;
  transition: background 0.2s;

  &:hover {
    background: #f2f2f2;
  }
`;

export const ProfileMenu = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 150px;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

export const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  text-align: center;
  font-family: "Roboto Mono", serif;
  
  &:hover {
    background: #f0f0f0;
  }
`;
