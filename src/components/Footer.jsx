import styled from "styled-components";
import { theme } from "../styles/theme";

const Box = styled.footer`
  background: #111;
  padding: 40px 20px;
  text-align: center;
  margin-top: 80px;

  p {
    color: ${theme.gray};
    margin-top: 10px;
  }

  a {
    color: ${theme.gold};
    font-weight: bold;
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <Box>
      <img src="././bahia-log.png" alt="Bahia Digital Studio" width="90" />
      <p>Bahia Digital Studio — Desenvolvendo marcas e experiências digitais.</p>
      <p>Email: <a href="mailto:bahiadigitalstudio@gmail.com">bahiadigitalstudio@gmail.com</a></p>
      <p>WhatsApp: <a href="https://wa.me/5575999242184">+55 75 99924-2184</a></p>
    </Box>
  );
}
