import styled from "styled-components";
import Layout from "../components/Layout";
import { theme } from "../styles/theme";
import { useForm } from "@formspree/react";

const Page = styled.div`
  background: ${theme.black};
  color: white;
  padding: 80px 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: ${theme.gold};
  font-size: 40px;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 40px auto;
  background: #111;
  padding: 30px;
  border-radius: 12px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  background:#000;
  border: 1px solid #333;
  color:white;
  border-radius: 8px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 12px;
  margin-bottom: 20px;
  background:#000;
  border:1px solid #333;
  color:white;
  border-radius: 8px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background: ${theme.gold};
  border: none;
  color: ${theme.black};
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  cursor:pointer;

  &:hover {
    background:#e0b65a;
  }
`;

export default function Contact() {
  const [state, handleSubmit] = useForm("xkgdqqja");

  return (
    <Layout>
      <Page>
        <Title>Contato</Title>

        {state.succeeded ? (
          <h3 style={{ textAlign:"center", color: theme.gold }}>
            Mensagem enviada com sucesso!
          </h3>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="nome" placeholder="Seu nome" required />
            <Input type="email" name="email" placeholder="Seu email" required />
            <TextArea name="mensagem" placeholder="Mensagem" required />

            <Button type="submit">Enviar</Button>
          </Form>
        )}
      </Page>
    </Layout>
  );
}
