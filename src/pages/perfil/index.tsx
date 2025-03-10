import { useState } from "react";
import { useSelector } from "react-redux";
import AvatarEditor from "react-avatar-edit";
import { RootState } from "store";
import Header from "../../components/header";

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
  CancelButton
} from "./styles";

const MembersPage: React.FC = () => {
  const loggedUser = useSelector((state: RootState) => state.auth.user);
  const [preview, setPreview] = useState<string | null>(loggedUser?.picture || "");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = () => setPreview(null);
  const onCrop = (view: string) => setPreview(view);
  // TODO Pegar os dados salvos e enviar para o banco e atualizar
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
          <Input id="name" type="text" value={loggedUser?.name} />
        </InputGroup>

        {/* TODO A senha não pode ta criptografada */}
        <InputGroup>
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" placeholder="Digite sua nova senha" value={loggedUser?.password} />
        </InputGroup>

        {/* TODO Criar um campo para mostrar a permissão do usuário */}
        Permissão: Definir na criação da conta
      </Content>
    </Container>
  );
};

export default MembersPage;
