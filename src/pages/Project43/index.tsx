import { Heart, Smiley, SmileyMeh, SmileySad } from 'phosphor-react'
import {
  ButtonSend,
  Cards,
  Card,
  ContainerProject43,
  ContentCongratulation,
} from './styles'
import { useState } from 'react'

type Performance = 'Unhappy' | 'Neutral' | 'Satisfied'

export function Project43() {
  const [selected, setSelected] = useState<Performance | null>(null)
  const [wasSent, setWasSent] = useState(false)

  function handleSelectPerformance(value: Performance) {
    setSelected(value)
  }

  function handleSend() {
    setWasSent(true)
  }

  if (wasSent) {
    return (
      <ContainerProject43>
        <ContentCongratulation>
          <Heart weight="fill" size={36} />
          <strong>Thank you</strong>
          <strong>Feedback: {selected}</strong>
          <p>
            {"We'll use your feedback to improve our"}
            <br /> {'customer support'}
          </p>
        </ContentCongratulation>
      </ContainerProject43>
    )
  }

  return (
    <ContainerProject43>
      <div>
        <strong>
          How satisfied are you with our <br /> customer support performance?
        </strong>
        <Cards>
          <Card
            onClick={() => handleSelectPerformance('Unhappy')}
            selected={selected === 'Unhappy'}
          >
            <SmileySad size={32} weight="regular" />
            <span>Unhappy</span>
          </Card>
          <Card
            onClick={() => handleSelectPerformance('Neutral')}
            selected={selected === 'Neutral'}
          >
            <SmileyMeh size={32} weight="regular" />
            <span>Neutral</span>
          </Card>
          <Card
            onClick={() => handleSelectPerformance('Satisfied')}
            selected={selected === 'Satisfied'}
          >
            <Smiley size={32} weight="regular" />
            <span>Satisfied</span>
          </Card>
        </Cards>
        <ButtonSend onClick={handleSend}>Send Review</ButtonSend>
      </div>
    </ContainerProject43>
  )
}
