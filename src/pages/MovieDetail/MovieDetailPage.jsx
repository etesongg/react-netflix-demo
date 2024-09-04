import React from "react";
import { useDetailsMoviesQuery } from "../../hooks/useMovieDetails";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import { Alert, Badge, Col, Container, Row } from "react-bootstrap";
import "./MovieDetailPage.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStar } from "@fortawesome/free-solid-svg-icons";
import MovieReviews from "./components/MovieReview/MovieReviews";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useDetailsMoviesQuery(id);
  console.log(data);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <Container>
      <Row>
        <Col>
          <div className="main-poster">
            <img
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`}
              alt="Movie Poster"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Col>
        <Col className="detail-info">
          <Col>
            {data.genres?.map((genre) => (
              <Badge bg="danger" key={genre.id} className="genre-badge">
                {genre.name}
              </Badge>
            ))}
          </Col>
          <Col className="detail-title">{data.title}</Col>
          <Col>{data.tagline}</Col>
          <Col>
            <span className="span-margin">
              <FontAwesomeIcon icon={faStar} className="icon-padding" />
              {data.vote_average}
            </span>
            <span className="span-margin">
              <FontAwesomeIcon icon={faUsers} className="icon-padding" />
              {data.popularity}
            </span>
            <span className="span-margin">
              {data.adult ? (
                <Badge bg="danger">18</Badge>
              ) : (
                <Badge bg="success">ALL</Badge>
              )}
            </span>
          </Col>
          <hr />
          <Col>{data.overview}</Col>
          <hr />
          <Col>
            <div>
              <Badge bg="secondary" className="etc-badge">
                Release Date
              </Badge>
              {data.release_date}
            </div>
            <div>
              <Badge bg="secondary" className="etc-badge">
                Run Time
              </Badge>
              {data.runtime}m
            </div>
            <div>
              <Badge bg="secondary" className="etc-badge">
                Budget
              </Badge>
              {data.budget?.toLocaleString("ko-KR")}$
            </div>
            <div>
              <Badge bg="secondary" className="etc-badge">
                Revenue
              </Badge>
              {data.revenue?.toLocaleString("ko-KR")}$
            </div>
          </Col>
        </Col>
      </Row>
      <Row className="review-area">
        <h4>Reviews</h4>
        {data? <MovieReviews movie_id={data.id} /> : null}
      </Row>
    </Container>
  );
};

export default MovieDetailPage;
