import React, { useEffect, useState } from "react";

import Spinner from "../components/Spinner";
import { httpClient } from "../components/utils/httpClient";
import styles from "./MovieDetails.module.css";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import useQuery from "../components/hooks/useQuery";

const MovieDetails = () => {
  // --- uso useParams para mostrar el parametro que quiero que me muestre cuando apreto en el detalle de la pelicula. en este caso, me mostaria en base al movieId
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  //--- ESTADO PARA UNA CARGA
  const [isLoading, setIsLoading] = useState(true);


  const query = useQuery();
  const search = query.get('search')

  

  // --- useEffect para llamada asyncrona, en este caso esto me devolvera el detalle de la pelicula por id
  useEffect(() => {
    setIsLoading(true);

    //--- CUANDO CARGA TODO EL LOADING DESAPARECE
    httpClient("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });

    //--- la dependencia va a depender del movieId, si cambio el movieId se ejecuta el efecto nuevamente
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!movie) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`$${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>Title:{movie.title}</p>
        {/* para mostrar 2 generos que estan en un array necesito mapearlos, lo conviero de un arreglo de obj. a un arreglo de texto, es decir me mapeo el genre y el name que son objetos a string, CON .join('ELEMENTO QUE QUIERO UTILIZAR PARA SEPARAR') LOS SEPARO */}
        <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        <p>Description:{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
