import React from "react";
import { Route, Routes } from "react-router-dom";

import { useFetch } from "./utils/useFetch";

import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmarked from "./pages/Bookmarked";
import Login from "./pages/Login";
import { Signup } from "./pages/Signup";
import App from "./App";

const Routing = () => {
  const { data, error, isLoading } = useFetch(
    "./assets/data/data.json",
    "media"
  );

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<App data={data} />} />
      <Route path="/movies" element={<Movies data={data} />} />
      <Route path="/series" element={<Series data={data} />} />
      <Route path="/bookmarked" element={<Bookmarked data={data} />} />
    </Routes>
  );
};

export default Routing;
