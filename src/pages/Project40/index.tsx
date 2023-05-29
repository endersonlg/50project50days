import { useState } from 'react'
import { ContainerProject40, ContentGif, PieceOfGif } from './styles'

export function Project40() {
  const [isJoin, setIsJoin] = useState(false)

  function handleJoin() {
    setIsJoin((state) => !state)
  }

  return (
    <ContainerProject40>
      <button type="button" onClick={handleJoin}>
        Magic 🎩
      </button>

      <ContentGif isJoin={isJoin}>
        <PieceOfGif position={'0px 0px'} isJoin={isJoin} />
        <PieceOfGif position={'-125px 0px'} isJoin={isJoin} />
        <PieceOfGif position={'-250px 0px'} isJoin={isJoin} />
        <PieceOfGif position={'-375px 0px'} isJoin={isJoin} />

        <PieceOfGif position={'0px -125px'} isJoin={isJoin} />
        <PieceOfGif position={'-125px -125px'} isJoin={isJoin} />
        <PieceOfGif position={'-250px -125px'} isJoin={isJoin} />
        <PieceOfGif position={'-375px -125px'} isJoin={isJoin} />

        <PieceOfGif position={'0px -250px'} isJoin={isJoin} />
        <PieceOfGif position={'-125px -250px'} isJoin={isJoin} />
        <PieceOfGif position={'-250px -250px'} isJoin={isJoin} />
        <PieceOfGif position={'-375px -250px'} isJoin={isJoin} />

        <PieceOfGif position={'0px -375px'} isJoin={isJoin} />
        <PieceOfGif position={'-125px -375px'} isJoin={isJoin} />
        <PieceOfGif position={'-250px -375px'} isJoin={isJoin} />
        <PieceOfGif position={'-375px -375px'} isJoin={isJoin} />
      </ContentGif>
    </ContainerProject40>
  )
}
