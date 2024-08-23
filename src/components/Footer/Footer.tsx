import React from 'react';
import styled from 'styled-components';

const Footer1 = styled.footer`
    margin: -8px;
`;

const Direitos = styled.div`
    font-family: 'TTSupermolot-Bold';
`;

const Background = styled.div`
    background-color: #201F53;
    color: white;
    text-align: center;
    padding: 20px 0;
`;

const Footer: React.FC = () => {
    return (
        <Footer1>
            <Background>
                <img src="public/logoABC.png" alt="Logo" />
                <Direitos>Todos os Direitos Reservados</Direitos>
            </Background>
        </Footer1>
    );
};

export default Footer;