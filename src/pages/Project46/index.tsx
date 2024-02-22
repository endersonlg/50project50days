import { useState } from 'react'
import { Button, Conclusion, ContainerProject46, Question } from './styles'

export function Project46() {
  const [step, setStep] = useState(0)
  const [quantityQuestionsCorrect, setQuantityQuestionsCorrect] = useState(0)
  const [optionSelected, setOptionSelected] = useState<string | null>(null)

  function handleSelectOption(option: string) {
    setOptionSelected(option)
  }

  const quizData = [
    {
      question: 'Which language runs in a web browser?',
      a: 'Java',
      b: 'C',
      c: 'Python',
      d: 'JavaScript',
      correct: 'd',
    },
    {
      question: 'What does CSS stand for?',
      a: 'Central Style Sheets',
      b: 'Cascading Style Sheets',
      c: 'Cascading Simple Sheets',
      d: 'Cars SUVs Sailboats',
      correct: 'b',
    },
    {
      question: 'What does HTML stand for?',
      a: 'Hypertext Markup Language',
      b: 'Hypertext Markdown Language',
      c: 'Hyperloop Machine Language',
      d: 'Helicopters Terminals Motorboats Lamborginis',
      correct: 'a',
    },
    {
      question: 'What year was JavaScript launched?',
      a: '1996',
      b: '1995',
      c: '1994',
      d: 'none of the above',
      correct: 'b',
    },
  ]

  function nextQuestion() {
    if (optionSelected === quizData[step].correct) {
      setQuantityQuestionsCorrect((state) => state + 1)
    }
    setOptionSelected(null)
    setStep((state) => state + 1)
  }

  function reload() {
    setStep(0)
    setQuantityQuestionsCorrect(0)
    setOptionSelected(null)
  }

  return (
    <ContainerProject46>
      {step < quizData.length ? (
        <Question>
          <div>
            <h2>{quizData[step].question}</h2>

            <ul>
              <li>
                <input
                  type="radio"
                  id="a"
                  checked={optionSelected === 'a'}
                  onChange={() => handleSelectOption('a')}
                />
                <label htmlFor="a">{quizData[step].a}</label>
              </li>

              <li>
                <input
                  type="radio"
                  id="b"
                  checked={optionSelected === 'b'}
                  onChange={() => handleSelectOption('b')}
                />
                <label htmlFor="b">{quizData[step].b}</label>
              </li>

              <li>
                <input
                  type="radio"
                  id="c"
                  checked={optionSelected === 'c'}
                  onChange={() => handleSelectOption('c')}
                />
                <label htmlFor="c">{quizData[step].c}</label>
              </li>

              <li>
                <input
                  type="radio"
                  id="d"
                  checked={optionSelected === 'd'}
                  onChange={() => handleSelectOption('d')}
                />
                <label htmlFor="d">{quizData[step].d}</label>
              </li>
            </ul>
          </div>

          <Button type="button" onClick={nextQuestion}>
            Submit
          </Button>
        </Question>
      ) : (
        <Conclusion>
          <div>
            <h2>{`You answered ${quantityQuestionsCorrect}/${quizData.length} questions correctly`}</h2>
          </div>
          <Button type="button" onClick={reload}>
            Reload
          </Button>
        </Conclusion>
      )}
    </ContainerProject46>
  )
}
