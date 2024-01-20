import { useState } from 'react'
import {
  BackgroundImage,
  Container,
  Content,
  ContentProgress,
  Step,
} from './styles'

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const places = [
    'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',

    'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',

    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',

    'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',

    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  ]

  function handleNext() {
    if (currentIndex < places.length - 1) setCurrentIndex((state) => state + 1)
  }

  function handleBack() {
    if (currentIndex > 0) setCurrentIndex((state) => state - 1)
  }

  return (
    <Container>
      <Content>
        {places.map((place, index) => (
          <BackgroundImage
            key={`background-${index}`}
            url={place}
            position={index - currentIndex}
          />
        ))}
      </Content>

      <button onClick={handleBack} style={{ position: 'absolute', bottom: 0 }}>
        Back
      </button>

      <ContentProgress>
        {places.map((_, index) => (
          <Step key={`step-${index}`} position={index - currentIndex} />
        ))}
      </ContentProgress>

      <button
        onClick={handleNext}
        style={{ position: 'absolute', bottom: 0, right: 0 }}
      >
        Next
      </button>
    </Container>
  )
}
