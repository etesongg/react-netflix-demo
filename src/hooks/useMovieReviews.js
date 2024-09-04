import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieReviews = (queryData) => {
    console.log(queryData)
    const id = queryData.queryKey[1];
    return api.get(`/movie/${id}/reviews`)
}

export const useMovieReviewsQuery = (id) => {
    return useQuery({
        queryKey: ["movie-review", id],
        queryFn: fetchMovieReviews,
        select: (result) => result.data
    })
}