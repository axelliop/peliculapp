import MovieCard from './MovieCard'
import React from 'react'
import movies from '../json/movies.json'
import styles from './MoviesGrid.module.css'

const MoviesGrid = () => {
    console.log(movies) //----COMIENZO A MAPEAR, por ej {movies.map(nombrelemento => (<li>{nombreelemento.titulo}</li> (siempre agregar una key))
  return (
    <ul className={styles.moviesgrid}>
     {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie}/> //---el movie={movie} lo paso como prop para que pueda destructurarlo en MovieCard.js, estoy mapeando el componente en si
     ))}
      
    </ul>
  )
}

export default MoviesGrid