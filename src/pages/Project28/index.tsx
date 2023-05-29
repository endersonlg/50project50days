import axios from 'axios'
import { FormEvent, useState } from 'react'
import { ContainerProject28, Profile } from './styles'

interface Repos {
  name: string
  html_url: string
}

interface User {
  avatar_url: string
  name: string
  bio: string | undefined
  followers: number
  following: number
  login: string
  public_repos: number
}

type UserWithRepos = User & {
  repos: Repos[]
}

export function Project28() {
  const [search, setSearch] = useState('')
  const [user, setUser] = useState<UserWithRepos>()

  async function handleSearch(event: FormEvent) {
    event.preventDefault()
    try {
      const { data } = await axios.get<User>(
        `https://api.github.com/users/${search}`,
      )

      const user: UserWithRepos = { ...data, repos: [] }

      const { data: dataRepos } = await axios.get<Repos[]>(
        `https://api.github.com/users/${user.login}/repos?sort=created`,
      )

      user.repos = dataRepos

      setUser(user)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(user)

  return (
    <ContainerProject28>
      <form onSubmit={handleSearch}>
        <input
          placeholder="Search a Github User"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyDown={(e) => e.key === 'Enter'}
        />
      </form>
      {user && (
        <Profile>
          <img src={user.avatar_url} alt="" />
          <div>
            <h2>{user.name}</h2>
            <p>{user.bio ?? 'null'}</p>
            <ul>
              <li>
                <span>
                  {user.followers} <strong>Followers</strong>
                </span>
              </li>
              <li>
                <span>
                  {user.following} <strong>Following</strong>
                </span>
              </li>
              <li>
                <span>
                  {user.repos.length} <strong>Repos</strong>
                </span>
              </li>
            </ul>
            <div>
              {user.repos.slice(0, 5).map((repo) => (
                <a href={repo.html_url} key={'repo-' + repo.name}>
                  {repo.name}
                </a>
              ))}
            </div>
          </div>
        </Profile>
      )}
    </ContainerProject28>
  )
}
