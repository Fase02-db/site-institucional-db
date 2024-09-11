import React from 'react'
import { Link } from 'react-router-dom'
import CardComponent from '../../components/Card'
import { StringsApp } from '../../assets/strings/string-app'
import styled from 'styled-components'
import Formulario from '../../components/Formulario'

const HeaderStyled = styled.header`
  width: 100%;
  height: 100%;
  background-image: url('../../../public/fundoheader.png');
  font-size: 80px;
  font-weight: 400;
  line-height: 98.4px;
  text-align: left;
  background-size: cover;
  color: #ffffff !important;
  border-radius: 0px 0px 8px 8px;

  p {
    width: 740px;
    padding: 258px 0 0 139px;
    margin: 0;
  }

  a {
    color: #ffffff !important;
    font-family: TTSupermolot-Bold;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-align: center;
    padding: 50px 0px 260px 180px;
    display: flex;
  }

  img {
    padding-left: 20px;
  }
`

const SectionSobre = styled.section`
  display: flex;
  padding: 70px 10%;
  flex-wrap: wrap;
  justify-content: center;
`

const Image = styled.img`
  border-radius: 8px;
`

const DivStyled = styled.div`
  padding-left: 50px;
  width: 25%;

  h4 {
    font-family: TTSupermolot-Bold;
    font-size: 36px;
    font-weight: 400;
    line-height: 44.46px;
    text-align: left;
    margin: 0;
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
    padding-bottom: 40px;
  }
`

const SectionCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  padding: 50px 0 20px 0;
  width: 100%;
`
const DivNoticia = styled.div`
  text-align: center;
  font-family: TTSupermolot-Bold;
  font-size: 36px;
  font-weight: 400;
  line-height: 44.46px;
  width: 100%;

  h4 {
    margin: 0;
  }
`

const SectionForm = styled.div`
  padding-bottom: 120px;
`

const ContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Home: React.FC = () => {
  return (
    <div>
      <HeaderStyled>
        <p>{StringsApp.tituloCabecalho}</p>
        <Link to={'/'}>
          Entre em contato <img src="/flecha.png"></img>
        </Link>
      </HeaderStyled>
      <ContainerStyled>
        <SectionSobre>
          <Image src="/abclocal.svg" />
          <DivStyled>
            <h4>{StringsApp.tituloSobre}</h4>
            <p>{StringsApp.resumoSobre}</p>
            <Link to={'/'}>Link</Link>
          </DivStyled>
        </SectionSobre>
        <DivNoticia>
          <h4>{StringsApp.tituloNoticia}</h4>
        </DivNoticia>
        <SectionCards>
          <CardComponent
            img="/image1.png"
            titulo={StringsApp.tituloCardUmHome}
            categoria="Solidariedade"
            resumo={StringsApp.resumoCardHome}
            saibaMais="Saiba mais"
            href="/"
          />
          <CardComponent
            img="/image2.png"
            titulo={StringsApp.tituloCardDoisHome}
            categoria="Negócios"
            resumo={StringsApp.resumoCardHome}
            saibaMais="Saiba mais"
            href="/noticia"
          />
          <CardComponent
            img="/image3.png"
            titulo={StringsApp.tituloCardTresHome}
            categoria="Mercado"
            resumo={StringsApp.resumoCardHome}
            saibaMais="Saiba mais"
            href="/"
          />
        </SectionCards>
        <SectionForm>
          <Formulario />
        </SectionForm>
      </ContainerStyled>
    </div>
  )
}

export default Home
