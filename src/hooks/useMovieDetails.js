import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchDetailsMovies = (queryData) => {
//   console.log(queryData); // ['details-movie', '533535']
  const id = queryData.queryKey[1];
  return api.get(`/movie/${id}`);
};

export const useDetailsMoviesQuery = (id) => {
  return useQuery({
    queryKey: ["details-movie", id],
    queryFn: fetchDetailsMovies,
    select: (result) => result.data
  });
};
