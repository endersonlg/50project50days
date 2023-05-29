import { CaretDown, XCircle } from 'phosphor-react'
import { useState } from 'react'
import { Card, ContainerProject12 } from './styles'

const data = [
  {
    id: 1,
    title: "Why shouldn't we trust atoms?",
    description: 'They make up everything',
  },
  {
    id: 2,
    title: 'What do you call someone with no body and no nose?',
    description: 'Nobody knows',
  },
  {
    id: 3,
    title: "What's the object-oriented way to become wealthy?",
    description: 'Inheritance.',
  },
  {
    id: 4,
    title: 'How many tickles does it take to tickle an octopus?',
    description: 'Ten-tickles!.',
  },
  {
    id: 5,
    title: 'What is: 1 + 1?',
    description: 'Depends on who are you asking.',
  },
]

export function Project12() {
  const [idsOpens, setIdsOpens] = useState<number[]>([])

  function handleSelected(id: number): void {
    if (idsOpens.includes(id)) {
      setIdsOpens(idsOpens.filter((idAux) => idAux !== id))
    } else {
      setIdsOpens([...idsOpens, id])
    }
  }

  console.log(idsOpens)

  return (
    <ContainerProject12>
      <h1>Frequently Asked Questions</h1>
      {data.map((card) => (
        <Card isOpen={idsOpens.includes(card.id)} key={card.id}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <button type="button" onClick={() => handleSelected(card.id)}>
            {idsOpens.includes(card.id) ? (
              <XCircle size={32} weight="fill" />
            ) : (
              <CaretDown size={32} />
            )}
          </button>
        </Card>
      ))}
    </ContainerProject12>
  )
}
