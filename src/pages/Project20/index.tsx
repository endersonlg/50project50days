import React, { useState } from 'react'
import { ContainerProject20, Effect } from './styles'

interface Position {
  x: number
  y: number
}

export function Project20() {
  const [position, setPosition] = useState<Position>()

  function handleClick(event: React.MouseEvent) {
    setPosition({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    })
    setTimeout(() => {
      setPosition(undefined)
    }, 500)
  }

  return (
    <ContainerProject20>
      <button type="button" id="button" onClick={(e) => handleClick(e)}>
        CLICK ME
        {position && <Effect x={position.x} y={position.y} />}
      </button>
    </ContainerProject20>
  )
}
