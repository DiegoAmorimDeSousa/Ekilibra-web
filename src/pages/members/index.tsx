import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import AddMemberModal from "./addNewMember";
import { CgProfile } from "react-icons/cg";

import { Container, Content, Title, GroupMember, InfoMember, SubTitle, NameAndStatus, Name, Status, Question, ProfilePicture, ProfilePictureEmpty } from './styles';

interface User {
  id?: string;
  name?: string;
  phone?: string;
  age?: string | number;  
  dateOfBirth?: string;
  picture?: string;
  role?: string;
  email?: string;
  token?: string;
  password?: string;
  status?: string;
}

import Header from '../../components/header'
import { RootState } from "store";
import { useSelector } from "react-redux";

const MembersPage: React.FC = () => {
  const loggedUser = useSelector((state: RootState) => state.auth.user);
  const [members, setMembers] = useState([{}]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  useEffect(() => {
    if(loggedUser){
      setMembers([
        {
          name: loggedUser?.name,
          role: loggedUser?.role,
          picture: loggedUser?.picture
        },
        ...loggedUser.invitedMembers || []
      ]);
    }
  }, [loggedUser])

  return (
    <Container>
      <Header />
      {isModalOpen && <AddMemberModal onClose={closeModal} />}
      <Content>
        <Title>Gerenciar membros</Title>
        <SubTitle>Adiconar membros</SubTitle>
        <GroupMember>
          <InfoMember>
            <Question onClick={openModal}>
              <IoAddCircleOutline size={20} />
            </Question>
            <NameAndStatus>
              <Name>Adicionar um membro</Name>
              <Status>Convite pendente</Status>
            </NameAndStatus>
          </InfoMember>
          <Question onClick={openModal}>
            <RiArrowRightSLine size={20} />
          </Question>
        </GroupMember>
        <SubTitle>Membros</SubTitle>
        {members?.map((member: User)=> {
          return (
            <GroupMember>
              <InfoMember>
                {member?.picture ? 
                  <ProfilePicture src={member?.picture || ''} alt="Imagem de perfil" /> : 
                  <ProfilePictureEmpty>
                    <CgProfile size={30}/>
                  </ProfilePictureEmpty>
                }
                <NameAndStatus>
                  <Name>{member?.name}</Name>
                  <Status>{member?.role ? member?.role?.toUpperCase() : 'Membro'}</Status>
                </NameAndStatus>
              </InfoMember>
              <Question>
                <RiArrowRightSLine size={20} />
              </Question>
            </GroupMember>
          )
        })}
      </Content>
    </Container>
  )
}

export default MembersPage;