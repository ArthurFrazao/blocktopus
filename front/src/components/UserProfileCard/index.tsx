//TODO: Rename this component to UserProfileDropdown when functionality was integrated.

import { UserCircle } from '@phosphor-icons/react'
import { Container } from './styles'

export function UserProfileCard() {
  return (
    <Container>
      <UserCircle size={32} weight="fill" />

      <span>Username</span>
    </Container>
  )
}
