import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const gold = "#CBA135";
const black = "#0D0D0D";

const HeaderContainer = styled.header`
  width: 100%;
  background: ${black};
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #1a1a1a;
  position: sticky;
  top: 0;
  z-index: 999;

  &:hover {
    background: #626128;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
  `

const Logo = styled(Link)`
  color: ${gold};
  font-size: 26px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
  margin-right: auto;
  padding-left: 30px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  padding-right: 30px;
 

  @media (max-width: 780px) {
    display: none;
    margin-left: -50px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 18px;
  text-decoration: none;
  transition: 0.2s;
  margin-right: 10px;

  &:hover {
    color: ${gold};
  }
`;

// ===== MENU MOBILE =====

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 780px) {
    display: block;
  }

  span {
    display: block;
    width: 28px;
    height: 3px;
    background: white;
    margin: 6px 0;
    transition: 0.3s;
  }

  &.open span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-100%")};
  width: 70%;
  height: 100%;
  background: #111;
  padding: 80px 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  transition: right 0.3s ease;

  a {
    color: white;
    font-size: 22px;
    text-decoration: none;

    &:hover {
      color: ${gold};
    }
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderContainer>

        <Logo to="/">BAHIA DIGITAL</Logo>

        {/* MENU DESKTOP */}
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/servicos">Serviços</NavLink>
          <NavLink to="/portfolio">Portfólio</NavLink>
          <NavLink to="/contato">Contato</NavLink>
          <NavLink to="/about">About</NavLink>
        </Nav>

        {/* BOTÃO MOBILE */}
        <MenuButton
          className={menuOpen ? "open" : ""}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </MenuButton>
      </HeaderContainer>

      {/* MENU MOBILE */}
      <MobileMenu open={menuOpen}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Início</Link>
        <Link to="/servicos" onClick={() => setMenuOpen(false)}>Serviços</Link>
        <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfólio</Link>
        <Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
         <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
      </MobileMenu>
    </>
  );
}
