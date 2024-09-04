import React from "react";
import { useMovieReviewsQuery } from "../../../../hooks/useMovieReviews";
import "./MovieReviews.style.css";
import LoadingSpinner from "../../../components/Spinner/LoadingSpinner";
import { Alert } from "react-bootstrap";

const MovieReviews = ({movie_id}) => {
  const { data, isLoading, isError, error } = useMovieReviewsQuery(movie_id);
  console.log(movie_id)
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  console.log("data",data)
  const reviews =
    data.results.length > 3 ? data.results.slice(0, 3) : data.results;

  return (
    <div>
      {reviews?.map((review) => (
        <div className="review-border">
          <h4>{review.author}</h4>
          {review.content}
        </div>
      ))}
    </div>
  );
};

export default MovieReviews;
