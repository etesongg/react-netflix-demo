import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import "./MoviePage.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import GenreFilterDropdown from "./components/GenreFilterDropdown/GenreFilterDropdown";

// 경로 2가지
// nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 영화 보여주기

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기
// page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const keyword = query.get("q");
  const [dropdownDisplay, setdropdownDisplay] = useState(false);
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  const toggleDropdown = () => {
    setdropdownDisplay(!dropdownDisplay);
  };
  const onSelectGenre = (genreId) => {
    setSelectedGenre(genreId); // 선택된 장르 상태 업데이트
    // 장르에 따라 필터링 로직 추가 가능
  };
  const filteredMovies = selectedGenre
    ? data?.results.filter((movie) => movie.genre_ids.includes(selectedGenre))
    : data?.results;

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <Container>
      <Row>
        <Col lg={3} xs={12} className="button-group">
          {/* <Button variant="outline-light">
            Sort <FontAwesomeIcon icon={faArrowRight} />
          </Button>{" "} */}
          <Button
            variant="outline-light"
            className="filter-button"
            onClick={toggleDropdown}
          >
            Filter <FontAwesomeIcon icon={faArrowRight} />
          </Button>{" "}
          {dropdownDisplay && <GenreFilterDropdown onSelectGenre={onSelectGenre}/>}
        </Col>

        <Col lg={9} xs={12}>
          <Row className="parent">
            {filteredMovies.length == 0 ? (
              <p>해당하는 결과가 없습니다.</p>
            ) : (
              filteredMovies.map((movie, index) => (
                <Col key={index} lg={4} md={6} xs={12}>
                  <MovieCard movie={movie}></MovieCard>
                </Col>
              ))
            )}
          </Row>
          <ReactPaginate
            nextLabel=" > "
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={500} // 전체 페이지 수
            previousLabel=" < "
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
