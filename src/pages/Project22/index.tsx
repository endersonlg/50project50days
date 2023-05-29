import { useRef, useState } from 'react'
import { ContainerProject22 } from './styles'
import CanvasDraw from 'react-canvas-draw'

export function Project22() {
  const [color, setColor] = useState<string>('black')
  const [size, setSize] = useState(10)
  const canvasRef = useRef<any>(null)

  function handleIncrementSize() {
    setSize((state) => state + 5)
  }

  function handleDecrementSize() {
    setSize((state) => state - 5)
  }

  function handleClear() {
    canvasRef.current.eraseAll()
  }

  return (
    <ContainerProject22>
      <div>
        <CanvasDraw
          ref={canvasRef}
          hideGrid={true}
          lazyRadius={0}
          brushRadius={size}
          brushColor={color}
          catenaryColor={'transparent'}
          style={{
            width: '100%',
            height: '100%',
            padding: 0,
          }}
        />
        <div>
          <div>
            <button
              type="button"
              onClick={handleDecrementSize}
              disabled={size <= 5}
            >
              -
            </button>
            <span>{size}</span>
            <button
              type="button"
              onClick={handleIncrementSize}
              disabled={size >= 50}
            >
              +
            </button>
            <input
              type="color"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
          </div>
          <button onClick={handleClear}>X</button>
        </div>
      </div>
    </ContainerProject22>
  )
}
