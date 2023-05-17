import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CaretRight } from '@phosphor-icons/react'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, BackgroundImage, Content, BtnLogin } from './styles'

export function Login() {
  const navigate = useNavigate()

  const [token, setToken] = useState('')
  const [isError, setIsError] = useState(false)

  function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    setToken(event.target.value)
  }

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault()

    token === '12345' ? navigate('/server-status') : setIsError(true)
  }

  return (
    <Container>
      <BackgroundImage />

      <Content>
        <h1>Login</h1>
        <span>Bem vindo(a) de volta!</span>

        <form onSubmit={handleLogin}>
          <Input
            name="token"
            type="text"
            placeholder="Digite o seu token ou senha"
            helperText={isError ? 'Token ou senha inválidos' : ''}
            value={token}
            onChange={handleValueChange}
          />
          <Button type="submit">
            <BtnLogin>
              <span>Login</span>
              <CaretRight size={32} color="#f9f9f9" />
            </BtnLogin>
          </Button>
        </form>
      </Content>
    </Container>
  )
}
