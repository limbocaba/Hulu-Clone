import React, { useEffect, useState } from 'react'
import './Results.css'
import  VideoCard  from './VideoCard';
import axios from '../axios'
import requests from '../requests';

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([])
  console.log(requests.fetchActionMovies)

  useEffect(() => { // run this code when the Results component loads/mounts
    async function fetchData() {
      const response = await axios.get(selectedOption)
     
      setMovies(response.data.results)
      return response
    }
    
    fetchData()
  }, [selectedOption])

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={ movie.id } movie={movie}/>
      ))}
      
    </div>
  )
}

export default Results;