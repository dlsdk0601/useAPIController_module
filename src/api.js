import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { client } from ".";

// const BASE_URL = "https://api.coinpaprika.com/v1/";
const ip = "http://localhost:8080/";
const baseURL = "http://localhost:8080/";

const Axios = axios.create({
  baseURL,
  timeout: 1000,
});

const get = async (path) => {
  const { data } = await Axios.get(path);
  return data;
};

export const post = async (path, body) => {
  return Axios.post(path, body);
};

export const GET = {
  useAllMovies: (key, path) => useQuery([key], () => get(path)),
  useSelectMoviesId: (key, path) => useQuery([key], () => get(path)),
};

export const POST = {
  useInsertMovie: (path) => useMutation((data) => post(path, data)),
  mutateCallBack: (key) => ({
    onSuccess: () => {
      const keyArr = [key];
      return client.invalidateQueries(keyArr);
    },
    onError: (err) => console.log(err),
  }),
};
