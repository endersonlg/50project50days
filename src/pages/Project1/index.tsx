import { useState } from 'react'
import { Card, ContainerProject1 } from './styles'

const places = [
  {
    title: 'Explore The World',
    background:
      'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Wild Forest',
    background:
      'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Sunny Beach',
    background:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
  },
  {
    title: 'City on Winter',
    background:
      'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
  },
  {
    title: 'Mountains - Clouds',
    background:
      'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
]

export function Project1() {
  const [imageSelected, setImageSelected] = useState<number>()

  function handleSelect(index: number) {
    setImageSelected(index)
  }

  return (
    <ContainerProject1>
      {places.map((place, index) => (
        <Card
          backgroundURL={place.background}
          selected={index === imageSelected}
          key={'card-' + index.toString()}
          onClick={() => handleSelect(index)}
        >
          <h3>{place.title}</h3>
        </Card>
      ))}
    </ContainerProject1>
  )
}
