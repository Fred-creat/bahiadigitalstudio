import styled from "styled-components";
import Layout from "../components/Layout";
import { theme } from "../styles/theme";

const Page = styled.div`
  background: ${theme.black};
  color: white;
  padding: 80px 20px;
  max-width: 900px;
  margin: auto;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.9);
`;

const Title = styled.h1`
  text-align: center;
  color: ${theme.gold};
  font-size: 40px;
  margin-bottom: 40px;
`;

const Text = styled.p`
  color: ${theme.gray};
  line-height: 1.5;
  font-size: 18px;
  margin-bottom: 20px;
`;

export default function About() {
  return (
    <Layout>
      <Page>
        <Title>Sobre a Bahia Digital Studio</Title>

        <Text>
          Somos um estúdio criativo especializado na criação de sites, marcas e estratégias digitais.
        </Text>

        <Text>
          Nossa missão é elevar negócios através de identidade visual forte, presença digital estratégica
          e designs que contam histórias e geram resultados.
        </Text>

        <Text>
          Trabalhamos com empreendedorismo local, empresas e marcas que buscam profissionalismo,
          impacto e crescimento real no ambiente digital.
        </Text>
      </Page>
    </Layout>
  );
}
