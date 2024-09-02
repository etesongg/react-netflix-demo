import React from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import "./MoviePage.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// 경로 2가지
// nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 영화 보여주기

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기
// page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword });
  console.log("ddd", data);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12} className="button-group">
          <Button variant="outline-light">
            Sort <FontAwesomeIcon icon={faArrowRight} />
          </Button>{" "}
          <Button variant="outline-light">
            Filter <FontAwesomeIcon icon={faArrowRight} />
          </Button>{" "}
        </Col>
        
        <Col lg={8} xs={12}>
          <Row className="parent">
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} md={6} xs={12}>
                <MovieCard movie={movie}></MovieCard>
              </Col>
            ))}
          </Row>
        </Col>
        
      </Row>
    </Container>
  );
};

export default MoviePage;
