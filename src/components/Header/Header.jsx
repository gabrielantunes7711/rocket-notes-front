import { Link } from "react-router-dom";
import { Container, Profile } from "./style";
import { RiShutDownLine } from "react-icons/ri";

export const Header = () => {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/gabrielantunes7711.png"
          alt="Foto do usuário"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Gabriel Antunes</strong>
        </div>
      </Profile>

      <button>
        <RiShutDownLine />
      </button>
    </Container>
  );
};
