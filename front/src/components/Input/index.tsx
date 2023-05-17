import { InputHTMLAttributes } from 'react'

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
        <input id={name} {...rest} />
      </CustomInput>

      <HelperText>{helperText}</HelperText>
    </Container>
  )
}
