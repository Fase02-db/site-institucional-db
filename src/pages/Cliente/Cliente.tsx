import React from 'react'
import CardComponent from '../../components/Card'
import { StringsApp } from '../../assets/strings/string-app'
import styled from 'styled-components'
import DepoimentoComponent from '../../components/Depoimento'
import BeneficiosComponent from '../../components/SecaoInformativa/Beneficios/BeneficiosComponent'

const HeaderStyled = styled.header`
  width: 100%;
  font-weight: 400;
  line-height:103.2px
  color: #292929 !important;

  h1 {
  font-family: 'TTSupermolot-Black';
  text-align: center;
  font-size: 80px;
  line-height:103.2px;
  color: #292929 !important;
  text-transform: uppercase;
  }

    h4 {
    font-family: TTSupermolot-Bold;
    font-size: 36px;
    font-weight: 400;
    line-height: 44.46px;
    text-align: center;
  }
`

const SectionClientes = styled.section`
  padding: 0px 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const DivStyled = styled.div`
  h4 {
    font-family: TTSupermolot-Bold;
    font-size: 36px;
    font-weight: 400;
    line-height: 44.46px;
    text-align: center !important;
    margin: 0;
  }

  p {
    font-family: TTSupermolot-Regular;
    font-size: 36px;
    font-weight: 400;
    line-height: 44.28px;
    text-align: center;
  }

  p {
    padding-bottom: 40px;
  }
`

const SectionCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: center;
  padding: 0 0 70px 0;

  h4 {
    text-align: left;
  }
`

const SectionBeneficios = styled.section`
  padding: 0 10%;

  div {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`

const LogoCliente = styled.div`
  padding: 20px 0 30px 0;

  img {
    padding-left: 80px;
  }
`

const Cliente: React.FC = () => {
  return (
    <div>
      <HeaderStyled>
        <h1>{StringsApp.tituloCabecalhoCliente}</h1>
        <h4>{StringsApp.subtituloCaseCliente}</h4>
        <SectionCards>
          <CardComponent
            img="/image4.png"
            titulo={StringsApp.tituloCardVajero}
            resumo={StringsApp.resumoCardHome}
            saibaMais="Saiba mais"
            href="/"
          />
          <CardComponent
            img="/image5.png"
            titulo={StringsApp.tituloCardPet}
            resumo={StringsApp.resumoCardHome}
            saibaMais="Saiba mais"
            href="/"
          />
          <CardComponent
            img="/image6.png"
            titulo={StringsApp.tituloCardFinancas}
            resumo={StringsApp.resumoCardHome}
            saibaMais="Saiba mais"
            href="/"
          />
        </SectionCards>
      </HeaderStyled>
      <SectionClientes>
        <DivStyled>
          <h4>{StringsApp.subtituloAlgunsClientes}</h4>
          <p>{StringsApp.resumoClientes}</p>
        </DivStyled>
        <LogoCliente>
          <img src="/stockcenter.svg" />
          <img src="/carrefour.png" />
          <img src="/walmart.png" />
        </LogoCliente>
        <LogoCliente>
          <img src="/marisa.png" />
          <img src="/petlove.png" />
          <img src="/portoseguro.png" />
        </LogoCliente>
        <DepoimentoComponent
          titulo="Depoimento"
          texto={StringsApp.resumoDepoimento}
          autor="Nome da pessoa"
          img="/homemcamisapretajaquetajeans.png"
        />
      </SectionClientes>
      <SectionBeneficios>
        <BeneficiosComponent />
      </SectionBeneficios>
    </div>
  )
}
export default Cliente
