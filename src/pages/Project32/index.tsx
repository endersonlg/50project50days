import { useState } from 'react'
import { ContainerProject32, ToggleSwitch } from './styles'

export function Project32() {
  const [good, setGood] = useState(false)
  const [cheap, setCheap] = useState(false)
  const [fast, setFast] = useState(false)

  function handleCheckGood(checked: boolean) {
    if (checked) {
      if (fast && cheap) {
        setFast(false)
      }
      setGood(true)
      return
    }
    setGood(false)
  }

  function handleCheckCheap(checked: boolean) {
    if (checked) {
      if (good && fast) {
        setGood(false)
      }
      setCheap(true)
      return
    }
    setCheap(false)
  }

  function handleCheckFast(checked: boolean) {
    if (checked) {
      if (good && cheap) {
        setCheap(false)
      }
      setFast(true)
      return
    }
    setFast(false)
  }

  return (
    <ContainerProject32>
      <h1>How do you want your project to be?</h1>
      <div>
        <ToggleSwitch>
          <label htmlFor="checkbox-good">
            <input
              type="checkbox"
              id="checkbox-good"
              onChange={(e) => handleCheckGood(e.target.checked)}
              checked={good}
            />
            <span />
          </label>
          <span>Good</span>
        </ToggleSwitch>

        <ToggleSwitch>
          <label htmlFor="checkbox-cheap">
            <input
              type="checkbox"
              id="checkbox-cheap"
              onChange={(e) => handleCheckCheap(e.target.checked)}
              checked={cheap}
            />
            <span />
          </label>
          <span>Cheap</span>
        </ToggleSwitch>

        <ToggleSwitch>
          <label htmlFor="checkbox-fast">
            <input
              type="checkbox"
              id="checkbox-fast"
              onChange={(e) => handleCheckFast(e.target.checked)}
              checked={fast}
            />
            <span />
          </label>
          <span>Fast</span>
        </ToggleSwitch>
      </div>
    </ContainerProject32>
  )
}
