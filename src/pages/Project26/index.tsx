import { ArrowDown, ArrowUp } from 'phosphor-react'
import { useState } from 'react'
import {
  ButtonDown,
  ButtonUp,
  ContainerProject26,
  Information,
  Landscape,
} from './styles'

const landscapes = [
  {
    title: 'Flying eagle',
    description: 'in the sunset',
    backgroundColor: '#FFB866',
    img: 'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Lonely castle',
    description: 'in the wilderness',
    backgroundColor: '#252E33',
    img: 'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80',
  },
  {
    title: 'Bluuue Sky',
    description: "with it's mountains",
    backgroundColor: '#2A86BA',
    img: 'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80',
  },
  {
    title: 'Nature flower',
    description: 'all in pink',
    backgroundColor: '#FD3555',
    img: 'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80',
  },
]

type ButtonClicked = 'up' | 'down'

export function Project26() {
  const [landscapeSelected, setLandscapeSelected] = useState<number>(0)

  function handleLandscapeSelection(buttonClicked: ButtonClicked): void {
    if (buttonClicked === 'up') {
      setLandscapeSelected((state) =>
        state < landscapes.length - 1 ? state + 1 : 0,
      )
    } else if (buttonClicked === 'down') {
      setLandscapeSelected((state) =>
        state === 0 ? landscapes.length - 1 : state - 1,
      )
    }
  }

  return (
    <ContainerProject26>
      {landscapes.map((landscape, index) => (
        <Information
          backgroundColor={landscape.backgroundColor}
          y={index === landscapeSelected ? 0 : index - landscapeSelected}
          key={'landscape1-' + index}
        >
          <h1>{landscape.title}</h1>
          <span>{landscape.description}</span>
        </Information>
      ))}
      {landscapes.map((landscape, index) => (
        <Landscape
          backgroundImage={landscape.img}
          y={index === landscapeSelected ? 0 : index - landscapeSelected}
          key={'landscape2-' + index}
        />
      ))}
      <ButtonUp onClick={() => handleLandscapeSelection('up')}>
        <ArrowUp size={24} weight="bold" />
      </ButtonUp>
      <ButtonDown onClick={() => handleLandscapeSelection('down')}>
        <ArrowDown size={24} weight="bold" />
      </ButtonDown>
    </ContainerProject26>
  )
}
