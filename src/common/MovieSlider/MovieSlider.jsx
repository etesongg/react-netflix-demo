import React from 'react'
import "./MovieSlider.style.css"
import MovieCard from "../MovieCard/MovieCard";
import Carousel from "react-multi-carousel";

const MovieSlider = ({title, movies, responsive}) => {
  return (
    <div>
      <h3 className='movieslider-title'>{title}</h3>
      <Carousel
        centerMode={true}
        infinite={true}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        responsive={responsive}
        >
        {movies.map((movie, index)=><MovieCard movie={movie} key={index} />)}
      </Carousel>
    </div>
  )
}

export default MovieSlider
