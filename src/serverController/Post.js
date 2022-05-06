import { useMutation } from "react-query";
import { client } from ".";
import { Axios } from "../Axios";

export const post = async (path, body) => {
  return Axios.post(path, body);
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
