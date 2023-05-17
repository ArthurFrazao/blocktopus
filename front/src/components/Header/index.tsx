import { useNavigate } from 'react-router-dom'
// import { Compass } from '@phosphor-icons/react'

// import { UserProfileCard } from '../UserProfileCard'

import { Container } from './styles'

export function Header() {
  const navigate = useNavigate()

  return (
    <Container>
      <img
        src="./src/assets/logo.svg"
        alt="logo blocktopus"
        role="button"
        onClick={() => navigate('/')}
      />
      {/* 
      TODO: Uncomment this code when functionality was integrated.
      <ul className="menu">
        <li role="button" onClick={() => navigate('/local-saves')}>
          <Compass size={32} weight="fill" /> Locais Salvos
        </li>
        <li>
          <UserProfileCard />
        </li>
      </ul> */}
    </Container>
  )
}
