import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "../Components/Header/Header";
import Container from "../Components/Container/Container";
import Navbar from "../Components/Navbar/Navbar";

import { searchByCategory } from "../utils/searchByCategory";
import { searchByInput } from "../utils/searchByInput";

function Movies({ data }) {
  const [moviesData, setMoviesData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState([]);

  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  useEffect(() => {
    if (loggedIn === false) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    setMoviesData(searchByCategory(data, "Movie"));
  }, [data]);

  useEffect(() => {
    setDataToDisplay(moviesData);
  }, [moviesData]);

  const handleSearch = (search) => {
    setDataToDisplay(searchByInput(moviesData, search));
  };

  return (
    <div className="Movies">
      <Navbar page={"movies"} />
      <Header handleSearch={(search) => handleSearch(search)} />
      <main className="main">
        <section className="section section--recommendation">
          <header className="section__header">
            <h2 className="section__header__title">Movies</h2>
          </header>

          <div className="section__main">
            <Container data={dataToDisplay} />
          </div>

          <footer className="section__footer"></footer>
        </section>
      </main>
    </div>
  );
}

export default Movies;
