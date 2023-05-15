import { Info } from '@phosphor-icons/react'

import { Container } from './styles'
import { Button } from '../Button'

type ServerStatusCardProps = {
  labelBtn: string
  pathImage: string
  onClick: () => void
}

export function ServerStatusCard({
  labelBtn,
  pathImage,
  onClick
}: ServerStatusCardProps) {
  return (
    <Container>
      <img src={pathImage} alt="image status" />

      <div className="has_problem">
        <span>Está com algum problema na conexão?</span>
        <Info size={24} weight="fill" role="button" />
      </div>

      <Button type="button" onClick={onClick}>
        <span>{labelBtn}</span>
      </Button>
    </Container>
  )
}
