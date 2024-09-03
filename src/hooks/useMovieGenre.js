import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieGenre = () => {
  return api.get(`/genre/movie/list`);
};

const useMovieGenreQuery = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetchMovieGenre,
    select: (result) => result.data.genres,
    // 장르는 데이터 업데이트가 있는 정보가 아님, 그렇기 때문에 시간 텀을 두고 api 호출하기
    staleTime: 300000,
  });
};

export default useMovieGenreQuery;
