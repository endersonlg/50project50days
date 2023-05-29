import { useState } from 'react'
import {
  Button,
  ContainerProject2,
  ContentButtons,
  Progress,
  Steps,
} from './styles'

export function Project2() {
  const [step, setStep] = useState(1)
  console.log('project 2')
  return (
    <ContainerProject2>
      <Progress>
        <Steps selected={step >= 1}>1</Steps>
        <Steps selected={step >= 2}>2</Steps>
        <Steps selected={step >= 3}>3</Steps>
        <Steps selected={step === 4}>4</Steps>
      </Progress>
      <ContentButtons>
        <Button
          type="button"
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
        >
          Prev
        </Button>
        <Button
          type="button"
          onClick={() => setStep(step + 1)}
          disabled={step === 4}
        >
          Next
        </Button>
      </ContentButtons>
    </ContainerProject2>
  )
}
