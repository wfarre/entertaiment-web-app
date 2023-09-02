import Card from "../Components/Card/Card";
import Navbar from "../Components/Navbar/Navbar";

import Header from "../Components/Header/Header";
import { useState, useEffect } from "react";
import MediaFactory from "../factories/MediaFactory";

function Bookmarked() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("./assets/data/data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        // console.log(data);

        const medias = data.map((media) => new MediaFactory(media, "json"));
        const bookmarkedMedias = medias.filter((media) => media.isBookmarked);
        console.log(bookmarkedMedias);
        setData(bookmarkedMedias);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  return (
    <div className="Bookmarked">
      <Navbar page={"bookmarked"}/>
      <Header />
      <main className="main">
        <section className="section section--recommendation">
          <header className="section__header">
            <h2 className="section__header__title">Bookmarked</h2>
          </header>

          <div className="section__main">
            <div className="container">
              {data.map((media, key = 0) => {
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
