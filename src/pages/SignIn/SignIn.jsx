import { FiMail, FiLock } from "react-icons/fi";

import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button label="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
};
