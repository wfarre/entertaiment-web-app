import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";

import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import { useEffect, useState } from "react";
import MediaFactory from "./factories/MediaFactory.js";
import { useFetch } from "./utils/useFetch";

function App() {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("./assets/data/data.json")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setIsLoading(false);
  //       // console.log(data);
  //       const medias = data.map((media) => new MediaFactory(media, "json"));
  //       setData(medias);
  //     })
  //     .catch((err) => {
  //       setIsLoading(false);
  //       setError(err);
  //     });
  // }, []);

  const { data, error, isLoading } = useFetch(
    "./assets/data/data.json",
    "media"
  );

  // console.log(a);

  useEffect(() => console.log(data), [data]);

  return (
    <div className="App">
      <Navbar page={"main"} />
      <Header />

      <main className="main">
        <section className="section section--trending" id="trending">
          <header className="section__header">
            <h2 className="section__header__title">Trending</h2>
          </header>

          <div className="section__main">
            <div className="container">
              <div className="viewport">
                {data.map((media, key = 0) => {
                  if (media.isTrending) {
                    key++;
                    return (
                      <Card
                        key={media.title + key}
                        title={media.title}
                        category={media.category}
                        year={media.year}
                        rating={media.rating}
                        isBookmarked={media.isBookmarked}
                        thumbnailTrending={media.thumbnailTrending}
                      />
                    );
                  }
                  return false;
                })}
              </div>
            </div>
          </div>

          <footer className="section__footer"></footer>
        </section>

        <section
          className="section section--recommendation"
          id="recommendation"
        >
          <header className="section__header">
            <h2 className="section__header__title">Recommended for you</h2>
          </header>

          <div className="section__main">
            <div className="container">
              {data.map((media) => {
                return (
                  <Card
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

export default App;
