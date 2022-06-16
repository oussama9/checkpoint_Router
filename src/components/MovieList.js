import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'
import "./MovieList.css";

const MovieList = ({listMovies}) => {
  return (
    <div className="MovieList">{

        listMovies.map( (ele,index)=>(
            <Link key={index} to={"/"+index} > 
            <MovieCard key={index} ele={ele} />
            </Link>
        ))
        }
        </div>
  )
}

export default MovieList