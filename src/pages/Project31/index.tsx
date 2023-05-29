import { Copy } from 'phosphor-react'
import { useState } from 'react'
import { ContainerProject31, Result, Settings } from './styles'

interface Options {
  length: number
  haveUppercase: boolean
  haveLowercase: boolean
  haveNumbers: boolean
  haveSymbols: boolean
}

const defaultOptions: Options = {
  length: 10,
  haveNumbers: true,
  haveSymbols: true,
  haveUppercase: true,
  haveLowercase: true,
}

export function Project31() {
  const [options, setOptions] = useState<Options>(defaultOptions)
  const [newPassword, setNewPassword] = useState<string | null>(null)

  function generateNewPassword() {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%&*'

    let characters = ''

    if (options.haveUppercase) {
      characters = characters.concat(uppercase)
    }

    if (options.haveLowercase) {
      characters = characters.concat(lowercase)
    }

    if (options.haveNumbers) {
      characters = characters.concat(numbers)
    }

    if (options.haveSymbols) {
      characters = characters.concat(symbols)
    }

    let password = ''

    for (let i = 0; i < options.length; i++) {
      const j = Math.floor(Math.random() * characters.length)
      password += characters[j]
    }

    setNewPassword(password)
  }

  function copyPassword() {
    if (newPassword) {
      navigator.clipboard.writeText(newPassword)
      alert('Password copied to clipboard!')
    }
  }

  return (
    <ContainerProject31>
      <div>
        <h2>Password Generator</h2>
        <Result>
          <span>{newPassword}</span>
          <button type="button" onClick={copyPassword}>
            <Copy size={18} weight="bold" />
          </button>
        </Result>
        <Settings onSubmit={generateNewPassword}>
          <div>
            <label>Password length</label>
            <input
              type="number"
              max={20}
              min={4}
              onChange={(e) =>
                setOptions((state) => ({
                  ...state,
                  length: Number(e.target.value),
                }))
              }
              value={options.length}
            />
          </div>
          <div>
            <label>Include uppercase letters</label>
            <input
              type="checkbox"
              onChange={(e) =>
                setOptions((state) => ({
                  ...state,
                  haveUppercase: e.target.checked,
                }))
              }
              checked={options.haveUppercase}
            />
          </div>
          <div>
            <label>Include lowercase letters</label>
            <input
              type="checkbox"
              onChange={(e) =>
                setOptions((state) => ({
                  ...state,
                  haveLowercase: e.target.checked,
                }))
              }
              checked={options.haveLowercase}
            />
          </div>
          <div>
            <label>Include numbers</label>
            <input
              type="checkbox"
              onChange={(e) =>
                setOptions((state) => ({
                  ...state,
                  haveNumbers: e.target.checked,
                }))
              }
              checked={options.haveNumbers}
            />
          </div>
          <div>
            <label>Include symbols</label>
            <input
              type="checkbox"
              onChange={(e) =>
                setOptions((state) => ({
                  ...state,
                  haveSymbols: e.target.checked,
                }))
              }
              checked={options.haveSymbols}
            />
          </div>
          <button type="button" onClick={generateNewPassword}>
            Generate Password
          </button>
        </Settings>
      </div>
    </ContainerProject31>
  )
}
