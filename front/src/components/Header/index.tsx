import { UserProfileCard } from '../UserProfileCard'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <img src="./src/assets/logo.svg" alt="logo blocktopus" />

      <UserProfileCard />
    </Container>
  )
}
