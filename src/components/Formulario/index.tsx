import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';
import { RotuloDeCampo } from '../RotuloDeCampo';

const DivContainer = styled.div`
  width: 977px;
  height: 516px;
  margin: 0;
  padding:0;
  text-align: left;
 `
const Titulo = styled.h1`
  font-family: 'TTSupermolot-Bold', sans-serif;
  font-weight: 700;  
  font-size: 48px;  
`
const SubTitulo = styled.h2`
  width: 100%;
  height: 83px;  
  font-family: 'Roboto Flex', sans-serif;
  font-weight: 400;  
  font-size: 16px; 
`
const DivFormulario = styled(Form)`
  width: 100%;
  marging:0px;
  height: 392px;
`
const DivCampos = styled.form`
  width: 100%;
  height: 125px;
  gap: 12px;
  display: flex;
`
const DivAreaDeTexto = styled.div`
  width: 100%;
  height: 197px;
  margin-top: 12px;
  border: 1px solid #292929;
`
const {TextArea} = Input;

const BotaoEnviar = styled(Button)`
  width: 200px;
  height: 44px;
  margin:5px;
  font-family: 'TTSupermolot-Bold', sans-serif;
  font-weight: 400;  
  font-size: 16px;
  line-height: 18.65px;
  background-color:#414ABA;
  border-radius: 6px;
  color: #fff; 
`
const DivInput = styled.div`
    width: 100%;
    height: 56px;
    margin: 0;
    margin-bottom: 12px;
    padding: 0;
    text-align: center;
    border: 1px solid #292929;
    border-radius: 8px;
    display:flex;
`
const DivStyled = styled.div`
   height: 100%;
`
const Formulario: React.FC = () => {

  const [nome, setNome] = useState<string>('');
  const [telefone, setTelefone]= useState<string>('');
  const [email, setEmail]= useState<string>('');
  const [assunto, setAssunto]= useState<string>('');
  const [mensagem, setMensagen]= useState<string>('');

  const handlerNome = (nome: React.ChangeEvent<HTMLInputElement>)=>{
    const valor = nome.target.value;
    setNome(valor);
  }

  const handlerTelefone = (telefone: React.ChangeEvent<HTMLInputElement>)=>{
    const valor = telefone.target.value;
    setTelefone(valor);
  }

  const handlerEmail = (email: React.ChangeEvent<HTMLInputElement>)=>{
    const valor = email.target.value;
    setEmail(valor);
  }

  const handlerAssunto = (assunto: React.ChangeEvent<HTMLInputElement>)=>{
    const valor = assunto.target.value;
    setAssunto(valor);
  }

  const handlerMensagem = (mensagem: React.ChangeEvent<HTMLTextAreaElement>)=>{
    const valor = mensagem.target.value;
    setMensagen(valor);
  }

  const enviarFormulario = async (): Promise<void> => {
    console.log('Entrou em enviar');
  };

  return (

    <DivContainer>

      <Titulo>Entre em contato</Titulo>
      <SubTitulo>
        Envie um e-mail através do formulário abaixo ou fale com a nossa equipe através
         de um dos nossos canais de atendimento.
      </SubTitulo>

      <DivFormulario>
        <DivCampos>
          <DivStyled style={{display:'block', width:'328px'}}>
            <Form.Item
              name="nome"
              rules={[{ required: true, message: 'Entre com seu nome.' }]}
              style={{margin:'0px'}}
            >
              <DivInput>
                <RotuloDeCampo>Nome</RotuloDeCampo>
                <Input style={{border:'none', boxShadow:'none'}}
                  value={nome}
                  onChange={handlerNome}
                />
              </DivInput>
            </Form.Item>

            <Form.Item
              name="telefone"
              rules={[{ required: true, message: 'Por favor, informe seu telefone!' }]}
            >
              <DivInput>
                <RotuloDeCampo>Telefone</RotuloDeCampo>
                <Input style={{border:'none', boxShadow:'none'}}
                  value={telefone}
                  onChange={handlerTelefone}
                />
              </DivInput>
            </Form.Item>
          </DivStyled>

          <DivStyled style={{width:'637px'}}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Por favor, informe seu email!' }]}
              style={{margin:'0px'}}
            >
              <DivInput>
                <RotuloDeCampo>E-mail</RotuloDeCampo>
                <Input style={{border:'none', boxShadow:'none'}}
                  value={email}
                  onChange={handlerEmail}
                />
              </DivInput>
            </Form.Item>

            <Form.Item
              name="assunto"
              rules={[{ required: true, message: 'Por favor, informe o assunto!' }]}
            >
              <DivInput>
                <RotuloDeCampo>Assunto</RotuloDeCampo>
                <Input style={{border:'none', boxShadow:'none'}}
                  value={assunto}
                  onChange={handlerAssunto}
                />
              </DivInput>
            </Form.Item>
          </DivStyled>
        </DivCampos>

        <DivAreaDeTexto >

          <Form.Item
            name="mensagem"
            rules={[{ required: true, message: 'Por favor, escreva sua mensagem!' }]}
          >
            <RotuloDeCampo>Mensagem</RotuloDeCampo>
            <TextArea
              style={{border:'none'}}
              rows={6}
              value={mensagem}
              onChange={handlerMensagem}
            />
          </Form.Item>
        </DivAreaDeTexto>
        <DivStyled style={{textAlign:'right'}}>
          <BotaoEnviar
            onClick={enviarFormulario}
          >
            Enviar
          </BotaoEnviar>
        </DivStyled>

      </DivFormulario>
    </DivContainer>
  );
};
export default Formulario;