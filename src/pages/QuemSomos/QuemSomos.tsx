import React from 'react'
import BeneficiosComponent from '../../components/SecaoInformativa/Beneficios/BeneficiosComponent'
import DepoimentoComponent from '../../components/Depoimento'
import CardComponent from '../../components/Card'
import { StringsApp } from '../../assets/strings/string-app'
import styled from 'styled-components'

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SectionSobre = styled.section`
  display: inline-flex;
  padding: 70px 20%;
`

const Image = styled.img`
  border-radius: 8px;
`

const SectionCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: center;
  padding: 50px 0 70px 0;

  .ant-card {
    background-color: #ffffff !important;
    border: none;
  }

  .ant-card-cover {
    padding: 10px 20px;

    img {
      width: 44px;
      height: 44px;
      background: #414aba;
      border-radius: 50px;
      padding: 20px;
    }
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
    margin: 0;
    padding-bottom: 40px;
  }

  p,
  a {
    font-family: TTSupermolot-Regular;
    font-size: 18px;
    font-weight: 400;
    line-height: 22.14px;
    text-align: left;
  }
`

const TituloHeader = styled.h1`
  font-family: 'TTSupermolot-Black';
  font-size: 80px;
  font-weight: 400;
  line-height: 103.2px;
  text-align: center;
  color: #292929;
  margin: 0;
  padding: 0 10%;
`

const SectionBeneficio = styled.div`
  padding: 0 20%;
`

const QuemSomos: React.FC = () => {
  return (
    <>
      <ContentStyled>
        <TituloHeader>{StringsApp.tituloQuemSomos}</TituloHeader>

        <SectionSobre>
          <Image src="/biblioteca.png" />
          <DivStyled>
            <h4>{StringsApp.tituloSobre}</h4>
            <p>{StringsApp.resumoSobreQuemSomosParagrafoUm}</p>
            <p>{StringsApp.resumoSobreQuemSomosParagrafoDois}</p>
          </DivStyled>
        </SectionSobre>
        <SectionCards>
          <CardComponent
            img="/SolidWorks.png"
            titulo="Desenvolvimento de Software"
            resumo={StringsApp.resumoCardHome}
            saibaMais="Saiba mais"
            href="/"
          />
          <CardComponent
            img="/Kanban.png"
            titulo="Metodologia Ágil"
            resumo={StringsApp.resumoCardHome}
            saibaMais="Saiba mais"
            href="/"
          />
          <CardComponent
            img="/Guarantee.svg"
            titulo="Qualidade"
            resumo={StringsApp.resumoCardHome}
            saibaMais="Saiba mais"
            href="/"
          />
        </SectionCards>
        <DepoimentoComponent
          titulo="Depoimento"
          texto={StringsApp.resumoDepoimentoDois}
          autor="Nome da Pessoa"
          img="/mulherfeira.png"
        />
        <SectionBeneficio>
          <BeneficiosComponent />
        </SectionBeneficio>
      </ContentStyled>
    </>
  )
}

export default QuemSomos
