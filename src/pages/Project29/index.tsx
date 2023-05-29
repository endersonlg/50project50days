import { Heart } from 'phosphor-react'
import React, { useState } from 'react'
import { ContainerProject29, Effect, ImageBackground } from './styles'

interface Position {
  x: number
  y: number
}
export function Project29() {
  const [amountClicks, setAmountCLicks] = useState(0)
  const [position, setPosition] = useState<Position>()

  function handleClick(event: React.MouseEvent) {
    setPosition({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    })
    setAmountCLicks((state) => state + 1)
    setTimeout(() => {
      setPosition(undefined)
    }, 500)
  }

  console.log(position?.x, position?.y)

  return (
    <ContainerProject29>
      <div>
        <h3>
          Double click on the image to{' '}
          <Heart size={24} weight="fill" color={'#F00'} /> it
        </h3>
        <small>You liked it {amountClicks} times</small>
        <ImageBackground onDoubleClick={handleClick}>
          {position && (
            <Effect x={position.x} y={position.y} weight="fill" color="#F00" />
          )}
        </ImageBackground>
      </div>
    </ContainerProject29>
  )
}
