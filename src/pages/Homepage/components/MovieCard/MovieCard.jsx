import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({movie}) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        {movie.genre_ids?.length > 0
          ? movie.genre_ids.map((id) => <Badge bg="secondary">{id}</Badge>)
          : ""}
        <div>
          <div>{movie.vote_average}</div>
          <div><FontAwesomeIcon icon={faUsers} className="icon-padding"/>{movie.popularity}</div>
          <div>{movie.adult ? <Badge bg="danger">18</Badge> : <Badge bg="success">Under 18</Badge>}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
