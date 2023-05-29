import { useEffect, useState } from 'react'
import { ContainerProject11 } from './styles'

export function Project11() {
  const [key, setKey] = useState('')
  const [keyCode, setKeyCode] = useState<number | null>(null)
  const [code, setCode] = useState('')

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      setKey(event.key)
      setKeyCode(event.keyCode)
      setCode(event.code)
    })
  }, [])

  return (
    <ContainerProject11>
      {!key ? (
        <div>
          <div>
            <div>Press any key to get the keyCode</div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <p>event.key</p>
            <div>{key}</div>
          </div>
          <div>
            <p>event.keyCode</p>
            <div>{keyCode}</div>
          </div>
          <div>
            <p>event.code</p>
            <div>{code}</div>
          </div>
        </div>
      )}
    </ContainerProject11>
  )
}
