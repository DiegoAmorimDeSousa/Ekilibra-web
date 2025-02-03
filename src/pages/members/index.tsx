import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";

import { Container, Content, Title, GroupMember, InfoMember, SubTitle, NameAndStatus, Name, Status, Question, ProfileButton } from './styles';

import Header from '../../components/header'

const MembersPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Title>Gerenciar membros</Title>
        <SubTitle>Adiconar membros</SubTitle>
        <GroupMember>
          <InfoMember>
            <Question>
              <IoAddCircleOutline size={20} />
            </Question>
            <NameAndStatus>
              <Name>Adicionar um membro</Name>
              <Status>Convite pendente</Status>
            </NameAndStatus>
          </InfoMember>
          <Question>
            <RiArrowRightSLine size={20} />
          </Question>
        </GroupMember>
        <SubTitle>Membros</SubTitle>
        <GroupMember>
          <InfoMember>
            <ProfileButton/>
            <NameAndStatus>
              <Name>Diego Sousa</Name>
              <Status>Admin</Status>
            </NameAndStatus>
          </InfoMember>
          <Question>
            <RiArrowRightSLine size={20} />
          </Question>
        </GroupMember>
        <GroupMember>
          <InfoMember>
            <ProfileButton/>
            <NameAndStatus>
              <Name>Beatriz Cesconetto</Name>
              <Status>Membro</Status>
            </NameAndStatus>
          </InfoMember>
          <Question>
            <RiArrowRightSLine size={20} />
          </Question>
        </GroupMember>
      </Content>
    </Container>
  )
}

export default MembersPage;