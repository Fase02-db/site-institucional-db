import React from 'react'
import CardComponent from '../../components/Card'
import { StringsApp } from '../../assets/strings/string-app'
import styled from 'styled-components'
import ServicosComponent from '../../components/SecaoInformativa/Servicos/ServicosComponent'

const HeaderStyled = styled.header`
  width: 100%;
  height: 100%;
  background-image: url('/cachorrobanner.png');
  font-size: 80px;
  font-weight: 400;
  line-height: 98.4px;
  text-align: left;
  background-size: cover;
  color: transparent;
  border-radius: 0px 0px 8px 8px;

  p {
    width: 740px;
    padding: 400px 0 0 139px;
    margin: 0;
  }
`

const SectionSobre = styled.section`
  display: inline-flex;
  padding: 0 15%;

  h1 {
    font-family: 'TTSupermolot-Black';
    text-align: center;
    font-size: 80px;
    line-height: 103.2px;
    color: #292929 !important;
    text-transform: uppercase;
  }
`

const DivStyled = styled.div`
  padding-left: 70px;

  h4 {
    font-family: TTSupermolot-Bold;
    font-size: 36px;
    font-weight: 400;
    line-height: 44.46px;
    text-align: left;
  }

  p,
  a {
    font-family: TTSupermolot-Regular;
    font-size: 18px;
    font-weight: 400;
    line-height: 22.14px;
    text-align: left;
  }

  p {
    font-family: Roboto Flex !important;
    line-height: 21.09px;
    margin: 0;
    padding-bottom: 40px;
  }
`

const SectionCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: center;
  padding: 50px 0 70px 0;
`
const DivNoticia = styled.div`
  text-align: center;
  font-family: TTSupermolot-Bold;
  font-size: 36px;
  font-weight: 400;
  line-height: 44.46px;

  h4 {
    margin: 0;
  }
`

const SectionServicos = styled.section`
  padding: 0 13%;

  div {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  h2 {
    margin: 0;
  }
`

const Cases: React.FC = () => {
  return (
    <div>
      <HeaderStyled>
        <p>.</p>
      </HeaderStyled>
      <SectionSobre>
        <DivStyled>
          <h1>{StringsApp.tituloCase}</h1>
          <p>{StringsApp.resumoCasePrimeiroParagrafo}</p>
          <p>{StringsApp.resumoCaseSegundoParagrafo}</p>
          <p>{StringsApp.resumoCaseTerceiroParagrafo}</p>
        </DivStyled>
      </SectionSobre>
      <SectionServicos>
        <ServicosComponent />
      </SectionServicos>
      <DivNoticia>
        <h4>{StringsApp.tituloServicosOferecidos}</h4>
      </DivNoticia>
      <SectionCards>
        <CardComponent
          img="/tablet.png"
          titulo={StringsApp.tituloCardDesign}
          resumo={StringsApp.resumoCardHome}
          saibaMais="Saiba mais"
          href="/"
        />
        <CardComponent
          img="/cachorro.png"
          titulo={StringsApp.tituloCardVeterinaria}
          resumo={StringsApp.resumoCardHome}
          saibaMais="Saiba mais"
          href="/"
        />
        <CardComponent
          img="/gato.png"
          titulo={StringsApp.tituloCardTecnoPet}
          resumo={StringsApp.resumoCardHome}
          saibaMais="Saiba mais"
          href="/"
        />
      </SectionCards>
    </div>
  )
}

export default Cases
