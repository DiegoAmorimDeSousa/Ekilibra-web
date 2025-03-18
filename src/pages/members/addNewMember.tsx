import React, { useState } from "react";
import { X } from "lucide-react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  Form,
  InputGroup,
  Input,
  Label,
  Select,
  SubmitButton,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { newMember } from "../../store/slices/authSlice";

const AddMemberModal = ({ onClose }: { onClose: () => void }) => {
  const loggedUser = useSelector((state: RootState) => state.auth.user);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: 0,
    birthdate: "",
    role: "user",
    owner: loggedUser?.email,
    ownerName: loggedUser?.name,
    id: loggedUser?.id
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(newMember(formData));
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Adicionar Membro</ModalTitle>
          <CloseButton onClick={onClose}>
            <X size={20} />
          </CloseButton>
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Nome</Label>
            <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label>Telefone</Label>
            <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label>E-mail</Label>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label>Idade</Label>
            <Input type="number" name="age" value={formData.age} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label>Data de Nascimento</Label>
            <Input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label>Role</Label>
            <Select name="role" value={formData.role} onChange={handleChange}>
              <option value="admin">Admin</option>
              <option value="member">Member</option>
              <option value="user">User</option>
            </Select>
          </InputGroup>
          <SubmitButton type="submit">Salvar</SubmitButton>
        </Form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AddMemberModal;
