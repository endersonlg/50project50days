import React, { useState } from 'react'
import { Box, ContainerProject21 } from './styles'

const image = 'https://source.unsplash.com/random/150x150'

export function Project21() {
  const [boxWithImage, setBoxWithImage] = useState(0)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)

  const handleDragOver = (
    e: React.DragEvent<HTMLDivElement>,
    index: number,
  ) => {
    e.preventDefault()
    if (index !== dragOverIndex) {
      setDragOverIndex(index)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault()
    console.log('aq')
    if (boxWithImage !== null) {
      setDragOverIndex(null)
      setBoxWithImage(index)
    }
  }

  return (
    <ContainerProject21>
      {Array.from({ length: 5 }, (_, index) => (
        <Box
          key={index}
          backgroundURL={index === boxWithImage ? image : undefined}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          over={dragOverIndex === index}
          startDragAndDrop={!!dragOverIndex}
        >
          {index === boxWithImage && <div draggable />}
        </Box>
      ))}
    </ContainerProject21>
  )
}
