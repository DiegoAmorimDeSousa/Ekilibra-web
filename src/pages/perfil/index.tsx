import { useState } from "react";
import { useSelector } from "react-redux";
import AvatarEditor from "react-avatar-edit";
import { RootState } from "store";
import Header from "../../components/header";
import { toast, ToastContainer } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { updateUser } from "../../store/slices/authSlice";

import { 
  Container, 
  Content, 
  Title, 
  InputGroup, 
  Label, 
  Input, 
  ProfilePictureWrapper, 
  ProfilePicture, 
  ChangePictureButton, 
  ModalOverlay, 
  ModalContent, 
  SaveButton, 
  CancelButton,
  Select
} from "./styles";

const MembersPage: React.FC = () => {
  const loggedUser = useSelector((state: RootState) => state.auth.user);
  const [preview, setPreview] = useState<string | null>(loggedUser?.picture || "");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [permission, setPermission] = useState<string>(loggedUser?.role || "membro");
  const [name, setName] = useState(loggedUser?.name || "");
  const [phone, setPhone] = useState(loggedUser?.phone || "");
  const [age, setAge] = useState(loggedUser?.age || "");
  const [dateOfBirth, setDateOfBirth] = useState<string>(loggedUser?.dateOfBirth ? new Date(loggedUser.dateOfBirth).toISOString().split("T")[0] : "");

  const onClose = () => setPreview(null);
  const onCrop = (view: string) => setPreview(view);

  const dispatch = useDispatch<AppDispatch>();

  const handleSave = async () => {
    const validDate = dateOfBirth ? new Date(dateOfBirth) : null;
    const formattedDate = validDate ? validDate.toISOString() : "Data inválida";
  
    const updatedUser = {
      name,
      phone,
      age,
      dateOfBirth: formattedDate,
      picture: preview || loggedUser?.picture,
      role: permission,
      email: loggedUser?.email,
      token: loggedUser?.token,
      password: loggedUser?.password,
      id: loggedUser?.id
    };
  
    try {
      const response = await dispatch(updateUser(updatedUser));
      if (response.payload) {
        toast.success("Perfil atualizado com sucesso!", { position: "top-right" });
      } else {
        toast.error("Falha ao atualizar perfil.", { position: "top-right" });
      }
    } catch (error) {
      console.error("Erro ao atualizar o perfil:", error);
      toast.error("Erro ao atualizar o perfil.", { position: "top-right" });
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <Title>Perfil</Title>
        <ProfilePictureWrapper>
          <ProfilePicture src={preview || loggedUser?.picture} alt="Imagem de perfil" />
          <ChangePictureButton onClick={() => setIsModalOpen(true)}>
            Alterar Foto
          </ChangePictureButton>
        </ProfilePictureWrapper>

        {isModalOpen && (
          <ModalOverlay>
            <ModalContent>
              <AvatarEditor
                width={300}
                height={300}
                onCrop={onCrop}
                onClose={onClose}
              />
              <SaveButton onClick={() => setIsModalOpen(false)}>Salvar</SaveButton>
              <CancelButton onClick={() => setIsModalOpen(false)}>Cancelar</CancelButton>
            </ModalContent>
          </ModalOverlay>
        )}

        <InputGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" value={loggedUser?.email} disabled />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="name">Nome</Label>
          <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="age">Idade</Label>
          <Input id="age" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="dateOfBirth">Data de Nascimento</Label>
          <Input 
            id="dateOfBirth" 
            type="date" 
            value={dateOfBirth 
              ? new Date(dateOfBirth).toISOString().split("T")[0] 
              : ""} 
              onChange={(e) => setDateOfBirth(e.target.value)} 
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="permission">Permissão</Label>
          <Select 
            id="permission" 
            value={permission}
            onChange={(e) => setPermission(e.target.value)}
          >
            <option value="user">Usuário</option>
            <option value="admin">Administrador</option>
            <option value="member">Membro</option>
          </Select>
        </InputGroup>

        <ChangePictureButton onClick={handleSave}>
          Salvar
        </ChangePictureButton>
      </Content>

      <ToastContainer />  
    </Container>
  );
};

export default MembersPage;
