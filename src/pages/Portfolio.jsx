import styled from "styled-components";
import Layout from "../components/Layout";
import { theme } from "../styles/theme";

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
  margin-top: 50px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  div {
    background: #1a1a1a;
    height: 200px;
    border-radius: 12px;
    border: 1px solid #333;

    img {
     
      width: 100%;
      height: 100%;
      object-fit: center;
      border-radius: 12px;
     
    }
  }
`;

export default function Portfolio() {
  return (
    <Layout>
      <Page>
        <Title>Portfólio</Title>

        <Grid>
          <div><img src="././port.png" alt="" /></div>
          <div><img src="././devburguer.png" alt="" /></div>
          <div><img src="././site-toptur.png" alt="" /></div>
          <div><img src="././dev-movies.png" alt="" /></div>
        </Grid>
      </Page>
    </Layout>
  );
}
