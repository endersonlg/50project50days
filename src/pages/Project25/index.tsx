import { useEffect, useState } from 'react'
import { ContainerProject25, Content, Header, Welcome } from './styles'

type ThemeHeader = 'dark' | 'light'

export function Project25() {
  const [themeHeader, setThemeHeader] = useState<ThemeHeader>('dark')

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const scrollPosition = window.scrollY
    if (scrollPosition > windowHeight * 0.3) {
      setThemeHeader('light')
    } else {
      setThemeHeader('dark')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ContainerProject25>
      <Header theme={themeHeader}>
        <nav>
          <ul>
            <li>
              <h1>
                <a href="">My Website</a>
              </h1>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </Header>
      <Welcome>
        <h1>Welcome to My Website</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
          consequuntur?
        </p>
      </Welcome>
      <Content>
        <div>
          <h2>Content One</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente,
            hic quo in ipsum iste soluta eaque perferendis nihil recusandae
            dolore officia aperiam corporis similique. Facilis quos tempore
            labore totam! Consectetur molestiae iusto ducimus error reiciendis
            aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt
            unde est quas? Voluptates a dolorum voluptatum quo perferendis aut
            sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum
            labore, placeat officiis sint illum rem voluptas ipsum repellendus
            iste eius recusandae quae excepturi facere, iure rerum sequi? Illum
            velit delectus dicta et iste dolorum obcaecati minus odio eligendi!
          </p>
        </div>
        <div>
          <h2>Content Two</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            provident nostrum possimus inventore nisi laboriosam consequatur
            modi nulla eos, commodi, omnis distinctio! Maxime distinctio impedit
            provident, voluptates illo odio nostrum minima beatae similique a
            sint sapiente voluptatum atque optio illum est! Tenetur tempora
            doloremque quae iste aperiam hic cumque repellat?
          </p>
        </div>
      </Content>
    </ContainerProject25>
  )
}
