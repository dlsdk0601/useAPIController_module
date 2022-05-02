import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { selectCoins, useAPIController } from "./api";

function App() {
  const obj = {
    title: "Tenet",
    year: 2020,
    genres: ["action"],
  };
  const aaa = useAPIController("select", "movies", "post", obj);
  console.log("aaa===");
  console.log(aaa);

  return <div>start</div>;
}

export default App;
