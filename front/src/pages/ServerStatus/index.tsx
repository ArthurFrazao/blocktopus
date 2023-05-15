import { useState } from 'react'
import { PageDefault } from '../../components/PageDefault'
import { ServerStatusCard } from '../../components/ServerStatusCard'

import { Container } from './styles'

type LabelStatus = 'Online' | 'Offline'

enum LabelStatusBtn {
  Online = 'Desligar',
  Offline = 'Ligar'
}

export function ServerStatus() {
  const [status, setStatus] = useState<LabelStatus>('Online')

  return (
    <PageDefault>
      <Container status={status}>
        <h3>Status do Servidor: {status}</h3>

        <ServerStatusCard
          pathImage={`./src/assets/${status}.svg`}
          labelBtn={LabelStatusBtn[status]}
          onClick={() => setStatus(status === 'Online' ? 'Offline' : 'Online')}
        />
      </Container>
    </PageDefault>
  )
}
