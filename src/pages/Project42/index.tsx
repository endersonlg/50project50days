import { ContainerProject42, Content, Form, List } from './styles'
import { useState, useEffect } from 'react'
import axios from 'axios'

interface User {
  name: {
    first: string
    last: string
  }
  picture: {
    thumbnail: string
  }
  location: {
    city: string
    country: string
  }
  login: {
    uuid: string
  }
}

interface ResponseGetUSers {
  results: User[]
}

export function Project42() {
  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function loadUsers() {
      const { data } = await axios.get<ResponseGetUSers>(
        'https://randomuser.me/api?results=50',
      )

      setUsers(data.results)
    }

    loadUsers()
  }, [])

  function handleSearch(aux: string) {
    setSearch(aux)
  }

  const usersAdjusted = users.map((user) => ({
    id: user.login.uuid,
    picture: user.picture.thumbnail,
    name: `${user.name.first} ${user.name.last}`,
    location: `${user.location.city}, ${user.location.country}`,
  }))

  const usersSearch = search
    ? usersAdjusted.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.location.toLowerCase().includes(search.toLowerCase()),
      )
    : usersAdjusted

  return (
    <ContainerProject42>
      <Content>
        <Form>
          <h3>Live User Filter</h3>
          <p>Search by name and/or location</p>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => handleSearch(e.target.value)}
            value={search}
          />
        </Form>

        <List>
          {usersSearch.map((user) => (
            <li key={user.id}>
              <img src={user.picture} alt="" />
              <div>
                <strong>{user.name}</strong>
                <small>{user.location}</small>
              </div>
            </li>
          ))}
        </List>
      </Content>
    </ContainerProject42>
  )
}
