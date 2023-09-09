import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button label="Cadastrar" />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
};
