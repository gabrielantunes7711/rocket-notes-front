import { FiPlus } from "react-icons/fi";
import { Header } from "../../components/Header/Header";
import { ButtonText } from "../../components/ButtonText/ButtonText";
import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { Input } from "../../components/Input/Input";
import { Section } from "../../components/Section/Section";
import { Note } from "../../components/Note/Note";

export const Home = () => {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>

        <li>
          <ButtonText title="React" />
        </li>

        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                {
                  id: "1",
                  name: "react",
                },
                {
                  id: "2",
                  name: "Rocketseat",
                },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
};
