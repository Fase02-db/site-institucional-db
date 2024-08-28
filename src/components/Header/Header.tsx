import React from 'react'
import './header.css'
import styled from 'styled-components';

const HeaderStyled = styled.header `
  width: 1440px;
  height: 87px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FontStyled = styled.header `
  font-family: "TTBold", sans-serif;
`
const RecipienteStyled = styled.header `
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px;
`
const LogoStyled = styled.header `
  margin-left: 20px; /* Ajuste conforme necessário */
  height: 50px; /* Ajuste a altura da logo */
`
const HugStyled = styled.header `
  margin-top: 6px;
  display: flex;
  gap: 40px;
`
const UlStyled = styled.header `
  list-style: none;
  display: flex;
  gap: 40px;
`
const AStyled = styled.header `
  color: #414aba;
  text-decoration: none;
  font-family: "TTBold", sans-serif;
  font-size: 17px;
`
const FundoStyled = styled.header `
  width: Fixed (200px) px;
  height: Fixed (44px) px;
  padding: 8px 16px 8px 16px;
  gap: 10px;
  border-radius: 6px 0px 0px 0px;
  opacity: 0px;
`

const Header: React.FC = () => {
  return (
    <div>
      <HeaderStyled>
        <div className="header-recipiente">
          <nav>
            <ul>
              <img
                src="./public/Logo DB dark blue 2.png"
                alt="ABC Logo"
                className="logo"
              />
              <div className="hughug">
                <li className="fundo-texto">
                  <a href="#quem-somos">Quem somos</a>
                </li>
                <li className="fundo-texto">
                  <a href="#o-que-fazemos">O que fazemos</a>
                </li>
                <li className="fundo-texto">
                  <a href="#clientes">Clientes</a>
                </li>
                <li className="fundo-texto">
                  <a href="#contato">Contato</a>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </HeaderStyled>
    </div>
  )
}

export default Header
