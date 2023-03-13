import React, { useEffect, useState } from 'react'
import {useLocation, useParams} from 'react-router-dom'

import MovieCard from './MovieCard'
import Spinner from './Spinner'
import { httpClient } from './utils/httpClient'
import styles from './MoviesGrid.module.css'
import useQuery from './hooks/useQuery'

const MoviesGrid = () => {
  

    const [isLoading, setIsLoading] = useState(true)

   //useState para cuando actualizo el estado se me recargue el componente con las peliculas actualizadas
    const [movies, setMovies] = useState([])

// --- CON ESTE QUERY TENGO ACCESO AL VALOR DEL SEARCH
    const query = useQuery();
    const search = query.get('search')
// --- CON ESTE QUERY TENGO ACCESO AL VALOR DEL SEARCH



    

    
    //---- LLAMO A LA API! por token ----
    useEffect(() => {

      setIsLoading(true)
      // --- si se cumple esa condicion de busqueda que asigne a la query, sino que siga en el inicio de todas las peliculas
      const searchUrl = search ? '/search/movie?query=' + search : '/discover/movie';
      httpClient(searchUrl).then((data) => {
       setMovies(data.results) //lo asigno a la funcion y luego lo muestro con la variable en el return
       setIsLoading(false)
      })
    }, [search])
    
   //---- LLAMO A LA API! por token ----


   if (isLoading) {
    return <Spinner/>
   }


    
    
    
    //----COMIENZO A MAPEAR, por ej {movies.map(nombrelemento => (<li>{nombreelemento.titulo}</li> (siempre agregar una key))
  return (
    <ul className={styles.moviesgrid}>
     {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie}/> //---el movie={movie} lo paso como prop para que pueda destructurarlo en MovieCard.js, estoy mapeando el componente en si
     ))}
      
    </ul>
  )
}

export default MoviesGrid