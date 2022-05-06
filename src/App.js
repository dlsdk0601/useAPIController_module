import axios from "axios";
import React, { useState } from "react";
import GET from "./serverController/Get";
import POST from "./serverController/Post";

function App() {
  const { data, isSuccess, isLoading, error, isError } = GET.useAllMovies(
    "all",
    `movies`
  );
  const { isSuccess: good, mutate } = POST.useInsertMovie("movies");

  const [title, setTitle] = useState("");

  const addMovie = (e) => {
    e.preventDefault();
    mutate(
      { title, genres: ["action"], year: 2022 },
      POST.mutateCallBack("all")
    );
  };

  return (
    <>
      <div>
        {!isLoading &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.title}</p>
              </div>
            );
          })}
      </div>

      <form>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <button onClick={(e) => addMovie(e)}>ADD</button>
      </form>
    </>
  );
}

export default App;
