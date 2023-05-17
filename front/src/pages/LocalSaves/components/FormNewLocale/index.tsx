import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input'
import { Container } from './styles'

export function FormNewLocal() {
  return (
    <Container>
      <form action="">
        <div className="input__group">
          <Input
            name="localName"
            type="text"
            placeholder="Digite o nome do local"
            helperText=""
            value=""
            // onChange={handleValueChange}
          />

          <Input
            name="coordinates"
            type="text"
            placeholder="Digite a coordenada"
            helperText=""
            value=""
            // onChange={handleValueChange}
          />
        </div>

        <Button>Adicionar</Button>
      </form>
    </Container>
  )
}
