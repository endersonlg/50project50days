import { Aside, ContainerProject45, Content } from './styles'

import NetflixLogo from './netflix-logo.png'
import { List, X } from 'phosphor-react'
import { useState } from 'react'

export function Project45() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleOpen() {
    setIsOpen((state) => !state)
  }

  return (
    <ContainerProject45>
      <button onClick={handleOpen}>
        <List size={24} weight="bold" />
      </button>

      <Aside isOpen={isOpen}>
        <div>
          <div>
            <button onClick={handleOpen}>
              <X size={24} weight="bold" />
            </button>

            <img src={NetflixLogo} alt="" />

            <ul>
              <li>TEAMS</li>
              <li>LOCATIONS</li>
              <li>LIFE AT NETFLIX</li>

              <ul>
                <li>NETFLIX CULTURE MEMO</li>
                <li>WORK LIFE BALANCE</li>
                <li>INCLUSION & DIVERSITY</li>
                <li>BLOG</li>
              </ul>
            </ul>
          </div>
        </div>
      </Aside>

      <Content>
        <img src={NetflixLogo} alt="" />
        <span>MOBILE NAVIGATION</span>
      </Content>
    </ContainerProject45>
  )
}
