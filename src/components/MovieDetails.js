import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MovieCard from './MovieCard';

const MovieDetails = ({list}) => {
    let params = useParams();
    let navigate = useNavigate();
    const goHome = () => navigate("/");
  return (
    <div className="desc">
    {  ( isNaN(params.id) || list.length <= parseInt(params.id)) ?  <p>No Movie With this id </p> :
    
    <>
    <button onClick={goHome}>Movies</button>
    <MovieCard ele={list[params.id]} /> 

    <iframe width="560" height="315" src={list[params.id].trailer}
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </>
    }
</div>
  )
}

export default MovieDetails