import React, { useEffect, useState } from 'react'
import './Results.css'
import  VideoCard  from './VideoCard';
import axios from '../axios'
import requests from '../requests';
import FlipMove from 'react-flip-move'

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([])
  console.log(requests.fetchActionMovies)

  useEffect(() => { // run this code when the Results component loads/mounts
    async function fetchData() {
      const response = await axios.get(selectedOption)
     
      setMovies(response.data.results)
      console.log(response.data.results)
      return response
    }
    
    fetchData()
  }, [selectedOption])

  return (
    <div className="results">
      <FlipMove>
      {movies.map((movie) => (
        <VideoCard key={ movie.id } movie={movie}/>
      ))}
      </FlipMove> 
    </div>
  )
}

export default Results;