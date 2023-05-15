import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CaretRight } from '@phosphor-icons/react'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, BackgroundImage, Content, BtnLogin } from './styles'

const schema = z.object({
  password: z.string().min(3, {
    message: 'Sua senha ou token devem conter no mínimo 6 caracteres.'
  })
})

type FormProps = z.infer<typeof schema>

export function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(schema),
    defaultValues: {
      password: ''
    }
  })

  const handleForm = (data: FormProps) => {
    console.log({ data })
  }

  return (
    <Container>
      <BackgroundImage />

      <Content>
        <h1>Login</h1>
        <span>Bem vindo(a) de volta!</span>

        <form onSubmit={handleSubmit(handleForm)}>
          <Input
            {...register('password')}
            type="text"
            placeholder="Digite o seu token ou senha"
            helperText={errors.password?.message}
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
