import styled from "styled-components";
import { theme } from "../styles/theme";
import Layout from "../components/Layout";

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

const Grid = styled.div`
  max-width: 1100px;
  margin: auto;
  margin-top: 50px;
  
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

const Card = styled.div`
  background: #111;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #222;

  h3 {
    color: ${theme.gold};
    margin-bottom: 10px;
  }

  p {
    color: ${theme.gray};
  }
`;

export default function Services() {
  return (
    <Layout>
      <Page>
        <Title>Nossos Serviços</Title>

        <Grid>
          <Card>
            <h3>Criação de Sites Premium</h3>
            <p>Sites modernos, rápidos e com foco em conversão.</p>
          </Card>

          <Card>
            <h3>Identidade Visual</h3>
            <p>Branding profissional com impacto e personalidade.</p>
          </Card>

          <Card>
            <h3>Social Media</h3>
            <p>Pacotes mensais de posts profissionais.</p>
          </Card>

          <Card>
            <h3>Landing Pages</h3>
            <p>Alta conversão para campanhas e vendas.</p>
          </Card>

          <Card>
            <h3>Consultoria</h3>
            <p>Direção estratégica para posicionamento digital.</p>
          </Card>
        </Grid>
      </Page>
    </Layout>
  );
}
