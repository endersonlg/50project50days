import { MagnifyingGlass } from 'phosphor-react'
import { useState } from 'react'
import { ContainerProject4, ContentInput } from './styles'

export function Project4() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ContainerProject4>
      <ContentInput isOpen={isOpen}>
        <input placeholder="Search" />
        <button onClick={() => setIsOpen(!isOpen)}>
          <MagnifyingGlass size={32} weight="bold" />
        </button>
      </ContentInput>
    </ContainerProject4>
  )
}
