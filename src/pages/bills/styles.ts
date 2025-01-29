import styled from "styled-components";

interface CategoryBillProps {
  background?: string;
}

export const Container = styled.div`
  height: 100vh;
  background: white;
`;

export const Content = styled.div`
  padding: 40px 250px;
  background: white;
`;

export const ContentCard = styled.div`
  display: flex;
  background: white;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 30px;
  background: white;
  font-family: "Roboto Mono", serif;
  font-weight: bold;
`;

export const ContentListBill = styled.div`
  background: white;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoBill = styled.div`
  background: white;
  display: flex;
  align-items: self-start;
`;

export const ValueBill = styled.div`
  background: white;
  font-size: 15px;
  background: white;
  font-family: "Roboto Mono", serif;
`;


export const ContentInfoBill = styled.div`
  background: white;
  margin-left: 15px;
`;

export const TitleBill = styled.div`
  font-size: 15px;
  background: white;
  font-family: "Roboto Mono", serif;
`;

export const CategoryBill = styled.div<CategoryBillProps>`
  background: ${({ background }) => background || "orange"};
  font-size: 12px;
  padding: 3px;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  letter-spacing: 1.5px;
  width: 70px;
  color: white;
`;

export const IconBill = styled.div`
  background: gainsboro;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;

  svg {
    color: #333;
    background: gainsboro;
  }
`;

export const InputButtons = styled.div`
  font-family: "Roboto", serif;
  background: white;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: flex-end;

  .first-button {
    background: white;
    border: solid 1px #f4c752;

    &:hover {
      background-color: #fce8bb;
    }
  }
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
  margin: 24px;

  &:hover {
    background-color: #fad067;
  }
`;