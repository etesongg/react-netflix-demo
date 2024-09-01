import React from "react";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
import LoadingSpinner from "../../../components/Spinner/LoadingSpinner";
import { responsive } from "../../../components/responsive";
import { Alert } from "react-bootstrap";

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <UpcomingMovieSlide
        title={"Upcoming Movies"}
        movies={data.result}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMovieSlide;
