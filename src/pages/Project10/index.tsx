import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { ContainerProject10 } from './styles'

interface ResponseJoke {
  joke: string
}

export function Project10() {
  const [joke, setJoke] = useState('')
  console.log('renderizou')

  const getJoke = useCallback(async () => {
    try {
      const { data } = await axios.get<ResponseJoke>(
        'https://icanhazdadjoke.com',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      setJoke(data.joke)
    } catch {
      setJoke('Failed !')
    }
  }, [])

  useEffect(() => {
    getJoke()
  }, [getJoke])

  return (
    <ContainerProject10>
      <div>
        <h3>{"Don't Laugh Challenge"}</h3>
        <p>{joke}</p>
        <button type="button" onClick={getJoke}>
          Get Another Joke
        </button>
      </div>
    </ContainerProject10>
  )
}
