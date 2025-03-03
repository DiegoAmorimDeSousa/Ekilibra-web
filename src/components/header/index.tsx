import React, { useState, useEffect, useRef } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "store";
import { logout } from "../../store/slices/authSlice"; 

import {
  Container,
  Logo,
  ContinaerLogo,
  ContinaerButtons,
  ProfileButton,
  Question,
  Button,
  ProfileMenu,
  MenuItem
} from './styles';

import EkillibraLogo from '../../assets/logo.png';
import ProfileDefault from '../../assets/profile-default.jpg';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state: RootState) => state.auth.user);
  
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    dispatch(logout()); 
    navigate("/"); 
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <ContinaerLogo>
        <Logo src={EkillibraLogo} alt="logo ekilibra"/>
      </ContinaerLogo>
      <ContinaerButtons>
        <Button>Home</Button>
        <Button>Contas</Button>
        <Button>Membros</Button>
        <Question>
          <FaRegQuestionCircle size={20} />
        </Question>
        <div style={{ position: "relative", background: 'white' }}>
          <ProfileButton 
            src={loggedUser?.picture || ProfileDefault} 
            onClick={toggleMenu}
          />
          {showMenu && (
            <ProfileMenu ref={menuRef}>
              <MenuItem onClick={() => navigate("/perfil")}>Perfil</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </ProfileMenu>
          )}
        </div>
      </ContinaerButtons>
    </Container>
  );
};

export default Header;
