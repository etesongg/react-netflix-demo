import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import LoadingSpinner from "../../../components/Spinner/LoadingSpinner";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Alert } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
import "./PopularMovieSlide.style.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div >
      <h3>Popular Movies</h3>
      <Carousel
        centerMode={true}
        infinite={true}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        responsive={responsive}
        >
        {data?.results.map((movie, index)=><MovieCard movie={movie} key={index} />)}
      </Carousel>
      ;
    </div>
  );
};

export default PopularMovieSlide;
