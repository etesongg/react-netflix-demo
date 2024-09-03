import React, { useState } from "react";
import useMovieGenreQuery from "../../../../hooks/useMovieGenre";
import LoadingSpinner from "../../../components/Spinner/LoadingSpinner";
import { Alert, Button } from "react-bootstrap";
import "./GenreFilterDropdown.style.css"

const GenreFilterDropdown = ({onSelectGenre}) => {
  const { data, isLoading, isError, error } = useMovieGenreQuery();
  const [selectedGenre, setSelectedGenre] = useState(null);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  const handleGenreClick = (id) => {
    setSelectedGenre(id);
    onSelectGenre(id); 
  };
  return (
    <div className="genre-filter-buttons">
      {data?.map((movie) => (
        <Button variant={selectedGenre === movie.id ? "secondary" : "danger"} movieId={movie.id} className="genre-filter-button" onClick={()=> handleGenreClick(movie.id)}>
          {movie.name}
        </Button>
      ))}
    </div>
  );
};

export default GenreFilterDropdown;
