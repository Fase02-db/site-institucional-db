import React from 'react'
import styled from 'styled-components'
import { Menu as AntMenu } from 'antd'
import { useLocation, Link } from 'react-router-dom'

const NavStyled = styled(AntMenu)`
    border-inline-end:unset !important;
    .ant-menu-item {
      display: inline;
      font-family: 'TTSupermolot-Bold';
      font-size: 18px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.02em;
      color: #414aba;
      padding: 0px 40px;
    }

    .ant-menu-item-selected {
      background-color: transparent; 
    }

    .ant-menu-item a {
      color: inherit;
    }

    .ant-menu {
      display: flex;
      margin: 0;
      width: 100%;
      background-color: #ffffff;
      font-family: 'TTSupermolot-Bold'; 
    }

    .ant-menu-submenu-title {
      display: flex;
      align-items: center;
    }

    .ant-menu-logo {
      width: 112px;
      height: 60px;
      opacity: 0;
      padding-left: 50px;
    }
  }
`

const HeanderStyled = styled.header`
  display: flex;
  align-items: center;
`

const HeaderComponent: React.FC = () => {
  const location = useLocation()

  const menuItems = [
    {
      label: <Link to="/quem-somos">Quem somos</Link>,
      key: '/quem-somos',
    },
    {
      label: <Link to="/cases">O que fazemos</Link>,
      key: '/cases',
    },
    {
      label: <Link to="/clientes">Clientes</Link>,
      key: '/clientes',
    },
    {
      label: <Link to="/contato">Contato</Link>,
      key: '/contato',
    },
  ]

  return (
    <HeanderStyled>
      <a href="/">
        <img src="/Logo DB dark blue 2.svg" alt="ABC Logo" className="logo" />
      </a>
      <NavStyled
        selectedKeys={[location.pathname]}
        items={menuItems}
        className="custom-menu"
      />
    </HeanderStyled>
  )
}

export default HeaderComponent
