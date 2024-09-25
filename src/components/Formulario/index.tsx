import React, { useState } from 'react'
import { Button, Form, Input, message } from 'antd'
import styled from 'styled-components'

const DivContainer = styled.div`
  width: 977px;
  height: 516px;
  margin: 0;
  padding: 0;
  text-align: left;
`
const Titulo = styled.h1`
  font-family: 'TTSupermolot-Bold', sans-serif;
  font-weight: 700;
  font-size: 48px;
`
const SubTitulo = styled.h2`
  width: 100%;
  font-family: 'Roboto Flex', sans-serif;
  font-weight: 400;
  font-size: 16px;
  padding-bottom: 10px;
`
const DivFormulario = styled(Form)`
  width: 100%;
  marging: 0px;
  height: 392px;
`
const DivCampos = styled.div`
  width: 100%;
  height: 125px;
  gap: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
`
const DivAreaDeTexto = styled.div`
  width: 100%;
  height: 197px;
  border: 1px solid #292929;
`
const { TextArea } = Input

const BotaoEnviar = styled(Button)`
  width: 200px;
  height: 44px;
  margin: 5px;
  font-family: 'TTSupermolot-Bold', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.65px;
  background-color: #2E8B57;
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
  display: flex;
`
const DivStyled = styled.div`
`
const DivBotao = styled.div`
   width: 100%;
   height: 56px;
   border: none;
`

const Formulario: React.FC = () => {
  const [nome, setNome] = useState<string>('')
  const [telefone, setTelefone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [assunto, setAssunto] = useState<string>('')
  const [mensagem, setMensagen] = useState<string>('')

  const handlerNome = (nome: React.ChangeEvent<HTMLInputElement>) => {
    const valor = nome.target.value
    setNome(valor)
  }

  const handlerTelefone = (telefone: React.ChangeEvent<HTMLInputElement>) => {
    const valor = telefone.target.value
    setTelefone(valor)
  }

  const handlerEmail = (email: React.ChangeEvent<HTMLInputElement>) => {
    const valor = email.target.value
    setEmail(valor)
  }

  const handlerAssunto = (assunto: React.ChangeEvent<HTMLInputElement>) => {
    const valor = assunto.target.value
    setAssunto(valor)
  }

  const handlerMensagem = (
    mensagem: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const valor = mensagem.target.value
    setMensagen(valor)
  }

  const [form] = Form.useForm()

  const enviarFormulario = async (): Promise<void> => {
    try {
      await form.validateFields()
      message.success('Formulário enviado com sucesso!')
      form.resetFields()
    } catch (errorInfo) {
      message.error('Todos os campos obrigatorios devem ser preenchidos!')
      console.log(errorInfo)
    }
  }

  return (
    <DivContainer>
      <Titulo>Entre em contato</Titulo>
      <SubTitulo aria-label="Sub-titulo-da-pagina">
        Envie um e-mail através do formulário abaixo ou fale com a nossa equipe
        através de um dos nossos canais de atendimento.
      </SubTitulo>

      <DivFormulario form={form}>
        <DivCampos>
          <DivStyled style={{ display: 'block', width: '328px'}}>
            <Form.Item
              name="nome"
              rules={[
                { required: true, message: 'Nome é obrigatório!' },
                { min: 3, message: 'O nome deve ter pelo menos 3 caracteres!' },
              ]}
              style={{ margin: '0px' }}
            >
              <DivInput>
                <Input
                  style={{ border: 'none', boxShadow: 'none' }}
                  placeholder="Nome"
                  aria-label="Digite-aqui-o-nome"
                  value={nome}
                  onChange={handlerNome}
                />
              </DivInput>
            </Form.Item>

            <Form.Item
              name="telefone"
              rules={[
                {
                  required: true,
                  message: 'Telefone é obrigatório!',
                },
                {
                  pattern: /^\(\d{2}\)\d{5}-\d{4}$/,
                  message: 'Formato inválido. Use (xx)xxxxx-xxxx',
                },
              ]}
              style={{ margin: 0 }}
            >
              <DivInput>
                <Input
                  style={{ border: 'none', boxShadow: 'none' }}
                  placeholder="Telefone"
                  aria-label="Digite-aqui-o-Telefone"
                  value={telefone}
                  onChange={handlerTelefone}
                />
              </DivInput>
            </Form.Item>
          </DivStyled>

          <DivStyled style={{ width: '637px'}}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Email é obrigatório!' },
                { type: 'email', message: 'Formato de email inválido!' },
              ]}
              style={{ margin: '0px' }}
            >
              <DivInput>
                <Input
                  style={{ border: 'none', boxShadow: 'none' }}
                  placeholder="E-mail"
                  aria-label="Digite-aqui-o-Email"
                  value={email}
                  onChange={handlerEmail}
                />
              </DivInput>
            </Form.Item>

            <Form.Item
              name="assunto"
              rules={[{ required: true, message: 'Assunto é obrigatório!' }]}
              style={{ margin: 0 }}
            >
              <DivInput>
                <Input
                  style={{ border: 'none', boxShadow: 'none' }}
                  placeholder="Assunto"
                  aria-label="Digite-aqui-o-Assunto"
                  value={assunto}
                  onChange={handlerAssunto}
                />
              </DivInput>
            </Form.Item>
          </DivStyled>
          <DivAreaDeTexto>
            <Form.Item name="mensagem">
              <TextArea
                placeholder="Mensagem"
                aria-label="Digite-aqui-a-mensagem"
                style={{ border: 'none', boxShadow: 'none' }}
                rows={8}
                value={mensagem}
                onChange={handlerMensagem}
              />
            </Form.Item>
          </DivAreaDeTexto>
          <DivBotao>
              <BotaoEnviar
                aria-label="Clique-aqui-para-enviar-o-formulario"
              >
                Enviar
              </BotaoEnviar>
          </DivBotao>
        
        </DivCampos>
      </DivFormulario>
    </DivContainer>
  )
}
export default Formulario
