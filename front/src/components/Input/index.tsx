import { InputHTMLAttributes } from 'react'
import { Container } from './styles'
import { Keyhole } from '@phosphor-icons/react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input({ name, ...rest }: InputProps) {
  return (
    <Container>
      <label htmlFor={name}></label>

      <Keyhole size={32} color="#f9f9f9" />
      <input id={name} {...rest} />
    </Container>
  )
}
