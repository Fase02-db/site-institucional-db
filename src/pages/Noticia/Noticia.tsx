import React from 'react'
import CardComponent from '../../components/Card'
import styled from 'styled-components'
import { StringsApp } from '../../assets/strings/string-app'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;

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
    border-radius: 0;
  }
`

const SectionSobre = styled.section`
  display: inline-flex;
  padding: 70px 20% 0 20%;
`

const Image = styled.img`
  border-radius: 8px;
`

const DivStyled = styled.div`
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

const Noticia: React.FC = () => {
  return (
    <>
      <HeaderStyled>
        <Image src="/mulherjanela1.png" />
      </HeaderStyled>
      <SectionSobre>
        <DivStyled>
          <h4>
            ABC fecha parceria com gigante do varejo para expandir tecnologia no
            setor pet
          </h4>
          <span>6 de agosto de 2024</span>
          <p>
            A ABC, líder em soluções tecnológicas para o mercado pet, anunciou
            hoje uma parceria estratégica com uma das maiores empresas de varejo
            do país, a Gigante do Varejo. Este acordo visa revolucionar a
            experiência de consumidores e pets por meio da integração de
            tecnologia avançada nas operações e produtos oferecidos nas lojas da
            gigante do varejo.
            <br />
            <br />
            O CEO da ABC, João Silva, destacou a importância da colaboração para
            o futuro do setor pet. Estamos entusiasmados com essa parceria. A
            infraestrutura robusta da Gigante do Varejo, combinada com nossas
            inovações tecnológicas, nos permitirá transformar a forma como
            produtos e serviços para pets são oferecidos e consumidos no Brasil,
            afirmou Silva.
            <br />
            <br />
            A Gigante do Varejo, conhecida por sua vasta rede de lojas físicas e
            forte presença no e-commerce, vê a parceria como uma oportunidade de
            impulsionar a inovação em suas operações. O mercado pet está
            crescendo rapidamente e a demanda por soluções tecnológicas que
            melhorem a vida dos animais de estimação e de seus donos é
            crescente. Com a expertise da ABC, poderemos oferecer uma
            experiência de compra única e personalizada, declarou Maria Andrade,
            diretora de operações da Gigante do Varejo.
            <br />
            <br />
            A colaboração prevê a introdução de uma série de inovações,
            incluindo dispositivos de monitoramento de saúde para pets, sistemas
            de alimentação automatizados e aplicativos que facilitam a gestão do
            bem-estar animal. Além disso, a ABC planeja implementar suas
            soluções de inteligência artificial e análise de dados para otimizar
            a oferta de produtos nas lojas da Gigante do Varejo, proporcionando
            uma experiência de compra mais eficiente e direcionada aos clientes.
            <br />
            <br />
            Especialistas do setor veem a parceria como um movimento estratégico
            para capitalizar sobre a tendência crescente de digitalização no
            mercado pet. Essa aliança tem o potencial de redefinir o mercado,
            trazendo benefícios significativos tanto para os consumidores quanto
            para o setor como um todo, comentou Carlos Lima, analista de
            mercado.
            <br />
            <br />
            Os primeiros resultados dessa colaboração devem começar a aparecer
            ainda este ano, com a introdução de novos produtos e tecnologias nas
            lojas físicas e na plataforma online da Gigante do Varejo. Além
            disso, campanhas de marketing conjuntas estão sendo planejadas para
            promover as novidades e atrair uma base de clientes ainda maior.
            <br />
            <br />
            Esta parceria promete não apenas fortalecer a posição de mercado de
            ambas as empresas, mas também melhorar significativamente a
            qualidade de vida dos pets e de seus donos, reafirmando o
            compromisso da ABC e da Gigante do Varejo com a inovação e a
            excelência no atendimento ao cliente.
            <br />
            <br />
          </p>
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
          href="/"
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
    </>
  )
}

export default Noticia
