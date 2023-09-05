import Card from "../Components/Card/Card";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";

import Header from "../Components/Header/Header";
import { searchByCategory } from "../utils/searchByCategory";
import { searchByInput } from "../utils/searchByInput";

function Series({ data }) {
  const [seriesData, setSeriesData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState([]);

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
            <div className="container">
              {dataToDisplay.map((media, key = 0) => {
                key++;
                return (
                  <Card
                    key={media.title + key}
                    title={media.title}
                    category={media.category}
                    year={media.year}
                    rating={media.rating}
                    isBookmarked={media.isBookmarked}
                    thumbnailRegular={media.thumbnailRegular}
                  />
                );
              })}
            </div>
          </div>

          <footer className="section__footer"></footer>
        </section>
      </main>
    </div>
  );
}

export default Series;
