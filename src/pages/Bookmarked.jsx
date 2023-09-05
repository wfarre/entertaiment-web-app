import Card from "../Components/Card/Card";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import { useState, useEffect } from "react";
import { searchIfIsBookmarked } from "../utils/searchByCategory";
import { searchByInput } from "../utils/searchByInput";

function Bookmarked({ data }) {
  const [bookmarkedData, setBookmarkedData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState([]);

  useEffect(() => {
    setBookmarkedData(searchIfIsBookmarked(data));
  }, [data]);

  useEffect(() => {
    setDataToDisplay(bookmarkedData);
  }, [bookmarkedData]);

  const handleSearch = (search) => {
    setDataToDisplay(searchByInput(bookmarkedData, search));
  };

  return (
    <div className="Bookmarked">
      <Navbar page={"bookmarked"} />
      <Header handleSearch={handleSearch} />
      <main className="main">
        <section className="section section--recommendation">
          <header className="section__header">
            <h2 className="section__header__title">Bookmarked</h2>
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

export default Bookmarked;
