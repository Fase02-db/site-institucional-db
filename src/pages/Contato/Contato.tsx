import React from 'react'
import styled from 'styled-components'
import Formulario from '../../components/Formulario'

const ContainerDiv = styled.div`
  margin: 0px;
  padding: 0px;
  margin-bottom: 10px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Imagem = styled.img`
  width: 100%;
  height: 100%;
`
const HeaderImgDiv = styled.div`
  width: 100%;
`
const TituloDiv = styled.div`
  margin: 55px 0px 55px 0px;
  padding: 0;
  width: 71%;
  height: 62px;
  text-align: center;
`
const TituloH1 = styled.h1`
  height: 45px;
  font-family: 'TTSupermolot-Bold';
  font-weight: 400;
  font-size: 36px;
  margin: 0;
  padding: 0;
  line-height: 44.46px;
`
const DadosEmpresa = styled.section`
  margin: 0px;
  padding: 0;
  width: 71%;
  height: 502px;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`
const FotoEmpresaDiv = styled.div`
  width: 45%;
  height: 100%;
`
const InformacoesEmpresaDiv = styled.div`
  width: 49%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`
const EnderecoFilialDiv = styled.div`
  width: 100%;
  height: 45%;
  gap: 19px;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`
const H5 = styled.h5`
  height: 44px;
  font-family: 'TTSupermolot-Regular';
  font-weight: 400;
  font-size: 18px;
  margin: 0px;
  padding: 0px;
  line-height: 22.14px;
`
const EntreEmContatoDiv = styled.div`
  width: 977px;
  height: 516px;
  clear: both;
  margin: 55px 0px 55px 0px;
  padding: 0;
  width: 71%;
  height: 600px;

`
const TelefoneDiv = styled.div`
  width: 221.21px;
  height: 44px;
  padding: 10px 10px 10px 0px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Contato: React.FC = () => {
  return (
    <ContainerDiv id="principal">
      <HeaderImgDiv>
        <Imagem src="/topContato.png" aria-label="imagem-topo-pagina" />
      </HeaderImgDiv>
      <TituloDiv>
        <TituloH1 aria-label="titulo-nosso-endereço">Nosso enderecos</TituloH1>
      </TituloDiv>
      <DadosEmpresa>
        <FotoEmpresaDiv>
          <Imagem
            src="/empresaRS.png"
            aria-label="imagem-da-fachada-da-empresa"
          />
        </FotoEmpresaDiv>
        <InformacoesEmpresaDiv>
          <EnderecoFilialDiv>
            <TituloH1 aria-label="nome-do-Estado-que-localiza-a-empresa">
              Rio Grande do Sul
            </TituloH1>
            <H5 aria-label="endereço-da-empresa">
              Av. Ipiranga, 6681 - TECNOPUC - Prédio 99A - 5º Andar |CEP
              90619-900 | Bairro Partenon | Porto Alegre | RS | Brasil |
            </H5>
            <TelefoneDiv>
              <div>
                <Imagem src="/iconePhone.png" aria-label="icone-do-telefone" />
              </div>
              <H5 aria-label="telefone-da-empresa">
                Telefone: <div>+55 (51) 3322-6828</div>
              </H5>
            </TelefoneDiv>
          </EnderecoFilialDiv>

          <EnderecoFilialDiv>
            <TituloH1 aria-label="nome-do-Estado-que-localiza-a-empresa-filial">
              São Paulo
            </TituloH1>
            <H5 aria-label="enderço-da-empresa-filial">
              Av. das Nações Unidas 12901, Torre Norte, 12. Andar |WeWork/CENU |
              04578-910 | Bairro Brooklin Paulista | São Paulo | SP | Brasil |
            </H5>
            <TelefoneDiv>
              <div>
                <Imagem
                  src="iconePhone.png"
                  aria-label="imagem-icone-telefone"
                />
              </div>
              <H5 aria-label="telefone-da-empresa-filial">
                Telefone: <div>+55 (11) 3064-0810</div>
              </H5>
            </TelefoneDiv>
          </EnderecoFilialDiv>
        </InformacoesEmpresaDiv>
      </DadosEmpresa>
      <EntreEmContatoDiv>
        <Formulario />
      </EntreEmContatoDiv>
    </ContainerDiv>
  )
}
export default Contato
