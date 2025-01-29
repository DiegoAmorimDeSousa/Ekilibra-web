import React from 'react';
import { BsHouse } from "react-icons/bs";
import { SlEnergy } from "react-icons/sl";
import { CiCreditCard2 } from "react-icons/ci";
import { IoCarOutline } from "react-icons/io5";
import { LuBaby } from "react-icons/lu";

import { InputButtons, SubmitButton, Container, Content, ContentCard, Title, ContentListBill, InfoBill, TitleBill, ContentInfoBill, CategoryBill, IconBill, ValueBill } from './styles'

import Header from '../../components/header';
import Card from '../../components/card';

const Bills: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Title>Contas</Title>
        <ContentCard>
          <Card value="2.000,00" description="Salário total" />
          <Card value="1.500,00" description="70% do salário" />
          <Card value="500,00" description="30% do salário" />
        </ContentCard>
        <ContentListBill>
          <InfoBill>
            <IconBill>
              <BsHouse />
            </IconBill>
            <ContentInfoBill>
              <TitleBill>Aluguel</TitleBill>
              <CategoryBill background="orange">Casa</CategoryBill>
            </ContentInfoBill>
          </InfoBill>
          <ValueBill>
            R$ 1.000,00
          </ValueBill>
        </ContentListBill>

        <ContentListBill>
          <InfoBill>
            <IconBill>
              <SlEnergy />
            </IconBill>
            <ContentInfoBill>
              <TitleBill>Academia</TitleBill>
              <CategoryBill background="green">Saúde</CategoryBill>
            </ContentInfoBill>
          </InfoBill>
          <ValueBill>
            R$ 90,00
          </ValueBill>
        </ContentListBill>

        <ContentListBill>
          <InfoBill>
            <IconBill>
              <CiCreditCard2 />
            </IconBill>
            <ContentInfoBill>
              <TitleBill>Fatura do cartão</TitleBill>
              <CategoryBill background="yellow">Fatura</CategoryBill>
            </ContentInfoBill>
          </InfoBill>
          <ValueBill>
            R$ 450,00
          </ValueBill>
        </ContentListBill>

        <ContentListBill>
          <InfoBill>
            <IconBill>
              <IoCarOutline />
            </IconBill>
            <ContentInfoBill>
              <TitleBill>Seguro do carro</TitleBill>
              <CategoryBill background="red">Carro</CategoryBill>
            </ContentInfoBill>
          </InfoBill>
          <ValueBill>
            R$ 85,00
          </ValueBill>
        </ContentListBill>

        <ContentListBill>
          <InfoBill>
            <IconBill>
              <LuBaby />
            </IconBill>
            <ContentInfoBill>
              <TitleBill>Creche</TitleBill>
              <CategoryBill background="blue">Escola</CategoryBill>
            </ContentInfoBill>
          </InfoBill>
          <ValueBill>
            R$ 300,00
          </ValueBill>
        </ContentListBill>
        <InputButtons>
          <SubmitButton type="submit">Adicionar conta</SubmitButton>
        </InputButtons>
      </Content>
    </Container>
  );
};

export default Bills;