import React from "react";
import { Container, Value, Description } from "./styles";

interface CardProps {
  value: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ value, description }) => {
  return (
    <Container>
      <Value>R$ {value}</Value>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;