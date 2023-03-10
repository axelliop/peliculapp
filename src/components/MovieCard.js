import { Link } from "react-router-dom";
import React from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  //---USO DESTRUCTURING DEL ELEMENTO QUE LLAME MOVIE EN EL COMPONENTE MOVIESGRID.JS

  //----CONCATENO LA RUTA DESDE LA API A LA URL DE LA PAGINA
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    //----- TODO DENTRO DEL LI YA QUE ESO ES LO QUE ME MAPEA
    <li className={styles.moviecard}>
        <Link to={'/movies/' + movie.id}> {/* LO COLOCO CON SU ID, ESTA LINKEADO TODA LA CARD PARA QUE CUANDO LA APRETE ME LLEVE A LA PAG DE DETAILS */}
      <img
        width={230}
        height={345}
        className={styles.movieImage}
        src={imageUrl}
        alt={movie.title}
      />
      {/* LO METRO DENTRO DE UN DIV PARA QUE ME APAREZCA EN LA SIG. LINEA */}
      <div>{movie.title}</div>
      </Link>
    </li>
    
  );
};

export default MovieCard;
