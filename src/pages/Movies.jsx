import Card from "../Components/Card/Card";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";

import Header from "../Components/Header/Header";
import { searchByCategory } from "../utils/searchByCategory";
import { searchByInput } from "../utils/searchByInput";

function Movies({ data }) {
  const [moviesData, setMoviesData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState([]);

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

export default Movies;
