import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const ApiContext = createContext(null)

const ApiProvider = ({ children }) => {
  const [videos, setVideos] = useState([])
  const [video, setVideo] = useState({})
  const [newVideo, setNewVideo] = useState({})
  const [loading, setLoading] = useState(false)
  const [trailer, setTrailer] = useState({})
  const [videoCategory, setVideoCategory] = useState('')
  const API_URL = 'https://api.themoviedb.org/3'

  const fetchMovies = async () => {
		const pages = []
		for(let i = 1; i <= 10; ++i) {
			await axios.get(`${API_URL}/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${i}`)
			.then(res => pages.push(...res.data.results))
			.catch(err => console.log(err))
		}
		setVideos(pages)
		setNewVideo(pages[0])
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovie = async (id) => {
    const { data } = await axios(`${API_URL}/movie/${id}videos`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        append_to_response: 'videos',
      },
    })
    if (data.videos && data.videos.results) {
      setTrailer(data.videos.results[0].key)
    }
    return data
  }

  const getSelectMovie = async (id) => {
    const movie = await fetchMovie(id)
    setVideo(movie)
    setVideoCategory(movie.genres[0])
  }

  return (
    <ApiContext.Provider
      value={{
        videos,
        video,
        trailer,
        newVideo,
        loading,
        videoCategory,
        getSelectMovie,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

export default ApiProvider
