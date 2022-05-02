import axios from "axios";
import { useQueries, useQuery } from "react-query";

const BASE_URL = "https://api.coinpaprika.com/v1/";
const ip = "http://localhost:8080/";

export const useAPIController = (key, path, method, body) => {
  const { data, isLoading, error, isError } = useQuery(key, async () => {
    const { data } = await axios({
      url: `${ip}${path}`,
      method,
      data: body,
    });
    return data;
  });

  return { data, isLoading, error, isError };
};
