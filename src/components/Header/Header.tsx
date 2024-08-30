import React from 'react'
import styled from 'styled-components'

const NavStyled = styled.nav`
  display: flex;
  margin: 0;
  width: 100%;
  background-color: #ffffff;
  font-family: 'TTSupermolot-Bold';
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #414aba;

  img {
    width: 112px;
    height: 60px;
    gap: 0px;
    opacity: 0px;
    padding-left: 50px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;

    li {
      padding: 0px 40px;
    }
  }
`
const Header: React.FC = () => {
  return (
    <NavStyled>
      <a href="/">
        <img
          src="./public/Logo DB dark blue 2.svg"
          alt="ABC Logo"
          className="logo"
        />
      </a>
      <ul>
        <li className="fundo-texto">
          <a href="/quem-somos">Quem somos</a>
        </li>
        <li className="fundo-texto">
          <a href="#o-que-fazemos">O que fazemos</a>
        </li>
        <li className="fundo-texto">
          <a href="/clientes">Clientes</a>
        </li>
        <li className="fundo-texto">
          <a href="/contato">Contato</a>
        </li>
      </ul>
    </NavStyled>
  )
}

export default Header
