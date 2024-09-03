import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import LoadingSpinner from "../../../components/Spinner/LoadingSpinner";
import "react-multi-carousel/lib/styles.css";
import { Alert } from "react-bootstrap";
import "./PopularMovieSlide.style.css"
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../components/responsive";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("PopularMovieSlide",data)
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div >
      <MovieSlider title={"Popular Movies"} movies={data.results} responsive={responsive}/>
    </div>
  );
};

export default PopularMovieSlide;
