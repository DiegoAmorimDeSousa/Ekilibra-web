import React  from "react";
import { FaRegQuestionCircle } from "react-icons/fa";

import { Container, Logo, ContinaerLogo, ContinaerButtons, ProfileButton, Question, Button } from './styles'

import EkillibraLogo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <ContinaerLogo>
        <Logo src={EkillibraLogo} alt="logo ekilibra"/>
      </ContinaerLogo>
      <ContinaerButtons>
        <Button>
          Home
        </Button>
        <Button>
          Contas
        </Button>
        <Button>
          Membros
        </Button>
        <Question>
          <FaRegQuestionCircle size={20} />
        </Question>
        <ProfileButton/>
      </ContinaerButtons>
    </Container>
  )
}

export default Header;