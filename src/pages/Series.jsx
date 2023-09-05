import Card from "../Components/Card/Card";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";

import Header from "../Components/Header/Header";
import { searchByCategory } from "../utils/searchByCategory";
import { searchByInput } from "../utils/searchByInput";
import Container from "../Components/Container/Container";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Series({ data }) {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const navigate = useNavigate();
  const [seriesData, setSeriesData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState([]);

  useEffect(() => {
    if (loggedIn === false) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    setSeriesData(searchByCategory(data, "TV Series"));
  }, [data]);

  useEffect(() => {
    setDataToDisplay(seriesData);
  }, [seriesData]);

  const handleSearch = (search) => {
    setDataToDisplay(searchByInput(seriesData, search));
  };

  return (
    <div className="Series">
      <Navbar page={"series"} />
      <Header handleSearch={handleSearch} />
      <main className="main">
        <section className="section section--recommendation">
          <header className="section__header">
            <h2 className="section__header__title">Series</h2>
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

export default Series;
