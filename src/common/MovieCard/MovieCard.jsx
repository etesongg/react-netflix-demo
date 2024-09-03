import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import "./MovieCard.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStar } from "@fortawesome/free-solid-svg-icons";
import useMovieGenreQuery from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery(); // : 앞에 있는걸 뒤에 있는걸로 재정의 하겠다는 의미

  // 장르 변환 함수
  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  return (
    <Row className="justify-content-center">
      <Col className="col-lg-4 col-md-6 col-12">
        <div
          style={{
            backgroundImage: `url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path})`,
          }}
          className="movie-poster"
        >
          <div className="overlay">
            <h1>{movie.title}</h1>
            {showGenre(movie.genre_ids)?.length > 0
              ? showGenre(movie.genre_ids).map((id) => (
                  <Badge bg="secondary" key={id}>
                    {id}
                  </Badge>
                ))
              : ""}
            <div>
              <div className="div-margin">
                {movie.adult ? (
                  <Badge bg="danger">18</Badge>
                ) : (
                  <Badge bg="success">ALL</Badge>
                )}
              </div>
              <div>
                <FontAwesomeIcon icon={faStar} className="icon-padding" />
                {movie.vote_average}
              </div>
              <div>
                <FontAwesomeIcon icon={faUsers} className="icon-padding" />
                {movie.popularity}
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MovieCard;
