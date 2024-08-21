import React from 'react'
import './header.css'
const Header: React.FC = () => {
  return (
    <div>
      <header>
        <div className="header-container">
          <nav>
            <ul>
              <img
                src="./public/Logo DB dark blue 2.png"
                alt="ABC Logo"
                className="logo"
              />
              <div className="hughug">
                <li className="bottom-text">
                  <a href="#quem-somos">Quem somos</a>
                </li>
                <li className="bottom-text">
                  <a href="#o-que-fazemos">O que fazemos</a>
                </li>
                <li className="bottom-text">
                  <a href="#clientes">Clientes</a>
                </li>
                <li className="bottom-text">
                  <a href="#contato">Contato</a>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
