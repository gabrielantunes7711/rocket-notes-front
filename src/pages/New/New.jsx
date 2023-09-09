import { Container, Form } from "./styles";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { Textarea } from "../../components/Textarea/Textarea";
import { NoteItem } from "../../components/NoteItem/NoteItem";
import { Section } from "../../components/Section/Section";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

export const New = () => {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="Novo item" />
          </Section>

          <Section title="Marcadores">
            <div className="tags-wrapper">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Nova Tag" />
            </div>
          </Section>

          <Button label="Salvar" />
        </Form>
      </main>
    </Container>
  );
};
