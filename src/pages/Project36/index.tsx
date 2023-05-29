import { ContainerProject36, Square } from './styles'

const QUANTITY = 500

export function Project36() {
  return (
    <ContainerProject36>
      <div>
        {Array.from({ length: QUANTITY }, (_, index) => (
          <Square key={index.toString()} />
        ))}
      </div>
    </ContainerProject36>
  )
}
