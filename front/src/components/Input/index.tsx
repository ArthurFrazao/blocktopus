import { InputHTMLAttributes } from 'react'
import { Keyhole } from '@phosphor-icons/react'

import { Container, CustomInput, HelperText } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  helperText?: string
}

export function Input({ name, helperText, ...rest }: InputProps) {
  return (
    <Container>
      <CustomInput>
        <label htmlFor={name}></label>

        <Keyhole size={32} color="#b9b9bc" />
        <input id={name} {...rest} />
      </CustomInput>

      <HelperText>{helperText}</HelperText>
    </Container>
  )
}
