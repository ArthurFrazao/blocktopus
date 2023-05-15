import { CaretRight } from '@phosphor-icons/react'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, BackgroundImage, Content, BtnLogin } from './styles'

function ButtonLogin() {
  return (
    <BtnLogin>
      <span>Login</span>
      <CaretRight size={32} color="#f9f9f9" />
    </BtnLogin>
  )
}

export function Login() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault()

    console.log('submit')
  }

  return (
    <Container>
      <BackgroundImage />

      <Content>
        <h1>Login</h1>
        <span>Bem vindo(a) de volta!</span>

        <form onSubmit={handleSubmit}>
          <Input
            name="token"
            type="text"
            placeholder="Digite o seu token ou senha"
          />
          <Button type="submit">
            <ButtonLogin />
          </Button>
        </form>
      </Content>
    </Container>
  )
}
