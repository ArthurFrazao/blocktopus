import { PlusCircle, XCircle } from '@phosphor-icons/react'

import { PageDefault } from '../../components/PageDefault'

import { Container, AddNewLocal } from './styles'
import { useState } from 'react'
import { FormNewLocal } from './components/FormNewLocale'

type ButtonViewModeProps = {
  modeView: boolean
}

const ButtonViewMode = ({ modeView }: ButtonViewModeProps) => {
  return (
    <>
      {modeView ? (
        <>
          <XCircle size={32} weight="fill" />
          Fechar
        </>
      ) : (
        <>
          <PlusCircle size={32} weight="fill" />
          Adicionar novo local
        </>
      )}
    </>
  )
}

export function LocalSaves() {
  const [isShowForm, setIsShowForm] = useState<boolean>(false)

  return (
    <PageDefault>
      <Container>
        <header>
          <h1>Locais Salvos</h1>

          <AddNewLocal onClick={() => setIsShowForm(!isShowForm)}>
            <ButtonViewMode modeView={isShowForm} />
          </AddNewLocal>
        </header>

        {isShowForm && <FormNewLocal />}
      </Container>
    </PageDefault>
  )
}
