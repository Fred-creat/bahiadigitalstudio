import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// PALETA PREMIUM
const gold = "#CBA135";
const black = "#0D0D0D";
const gray = "#CCCCCC";

// CONTAINERS GERAIS
const Page = styled.div`
  background: ${black};
  color: white;
  font-family: "Georgia", serif;
  padding-bottom: 80px;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 80px 20px;
  text-align: center;
`;

// HERO
const Hero = styled.div`
  padding: 140px 20px 120px;
  text-align: center;

  h1 {
    font-size: 52px;
    color: ${gold};
    font-weight: 700;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 20px;
    margin-top: 20px;
    color: ${gray};
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  img {
    width: 130px;
    margin-bottom: 30px;
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 40px;
  padding: 14px 28px;
  background: ${gold};
  color: ${black};
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  font-size: 18px;
  transition: 0.25s;

  &:hover {
    background: #e0b65a;
    transform: scale(1.05);
  }
`;

// SERVIÇOS
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ServiceCard = styled.div`
  background: #111;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 30px;

  h3 {
    color: ${gold};
    margin-bottom: 10px;
    font-size: 22px;
  }

  p {
    color: ${gray};
    font-size: 15px;
  }
`;

// PORTFÓLIO
const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
  margin-top: 50px;

  div {
    height: 180px;
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default function Home() {
  return (
    <Page>

      {/* HERO */}
      <Header/>
      <Hero>
        <img src="././bahia-log.png" alt="Bahia Digital Studio Logo" />

        <h1>BAHIA DIGITAL STUDIO</h1>
        <h2>Desenvolvendo marcas e experiências digitais com autenticidade, estratégia e alto padrão visual.</h2>

        <Button href="https://wa.me/5575999242184" target="_blank">
          Solicitar Orçamento
        </Button>
      </Hero>

      {/* SERVIÇOS */}
      <Section>
        <h2 style={{ color: gold, fontSize: "32px", marginBottom: "20px" }}>
          Serviços
        </h2>

        <ServicesGrid>
          <ServiceCard>
            <h3>Criação de Sites</h3>
            <p>Sua presença digital com design premium, performance e conversão.</p>
          </ServiceCard>

          <ServiceCard>
            <h3>Identidade Visual</h3>
            <p>Construção de marcas únicas, estratégicas e memoráveis.</p>
          </ServiceCard>

          <ServiceCard>
            <h3>Gestão de Redes</h3>
            <p>Criação de conteúdo profissional para elevar sua marca.</p>
          </ServiceCard>

          <ServiceCard>
            <h3>Consultoria Digital</h3>
            <p>Orientação especializada para crescimento e posicionamento online.</p>
            <p>Breve!!</p>
          </ServiceCard>
        </ServicesGrid>
      </Section>

      {/* PORTFÓLIO */}
      <Section>
        <h2 style={{ color: gold, fontSize: "32px", marginBottom: "20px" }}>
          Portfólio
        </h2>
        <p style={{ color: gray, marginBottom: "40px" }}>
          Alguns dos nossos projetos recentes.
        </p>

        <PortfolioGrid>
          <div><img src="dev-movies.png" alt="" /></div>
          <div><img src="site-toptur.png" alt="" /></div>
          <div><img src="devburguer.png" alt="" /></div>
        </PortfolioGrid>
      </Section>

      {/* CONTATO FINAL */}
      <Section>
        <h2 style={{ color: gold, fontSize: "32px" }}>
          Vamos criar algo incrível juntos?
        </h2>
        <Button href="https://wa.me/5575999242184" target="_blank">
          Falar no WhatsApp
        </Button>
      </Section>

      <Footer/>
    </Page>
  );
}
