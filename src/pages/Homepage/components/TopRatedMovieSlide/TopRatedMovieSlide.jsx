import React from "react";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import LoadingSpinner from "../../../components/Spinner/LoadingSpinner";
import { Alert } from "react-bootstrap";
import { responsive } from "../../../components/responsive";

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <TopRatedMovieSlide
        title={"Top Rated Movies"}
        movies={data.result}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRatedMovieSlide;
