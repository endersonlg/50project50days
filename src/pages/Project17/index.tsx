import axios from 'axios'
import { useEffect, useState } from 'react'
import { ContainerProject17 } from './styles'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

interface Movie {
  id: string
  poster_path: string
  title: string
  vote_average: number
  overview: string
}

interface ResponseTMDB {
  results: Movie[]
}

export function Project17() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    ;(async () => {})()
  }, [])

  useEffect(() => {
    ;(async () => {
      if (search.length > 1) {
        const { data } = await api.get<ResponseTMDB>(
          `/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="${search}"`,
        )
        setMovies(data.results)
      } else {
        const { data } = await api.get<ResponseTMDB>(
          'discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1',
        )
        setMovies(data.results)
      }
    })()

    return () => {
      setMovies([])
    }
  }, [search])

  return (
    <ContainerProject17>
      <header>
        <input
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </header>

      <main>
        {movies.map((movie, index) => (
          <div key={'movie-' + index}>
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              alt=""
            />
            <div>
              <h3>{movie.title}</h3>
              <span>{movie.vote_average}</span>
            </div>
            <div>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
      </main>
    </ContainerProject17>
  )
}
