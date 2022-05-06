import { useQuery } from "react-query";
import { Axios } from "../Axios";

const get = async (path) => {
  const { data } = await Axios.get(path);
  return data;
};

export const GET = {
  useAllMovies: (key, path) => useQuery([key], () => get(path)),
  useSelectMoviesId: (key, path) => useQuery([key], () => get(path)),
};
