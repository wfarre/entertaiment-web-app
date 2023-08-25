import Card from "../Components/Card/Card";
import { useEffect, useState } from "react";
import MediaFactory from "../factories/MediaFactory";

function Movies() {
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
        const filteredData = data.filter((data) => data.category === "Movie");
        console.log(filteredData);

        const medias = filteredData.map(
          (media) => new MediaFactory(media, "json")
        );
        setData(medias);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  return (
    <div className="Movies">
      {/* <Navbar />
      <Header /> */}

      <section className="section section--recommendation">
        <header className="section__header">
          <h2 className="section__header__title">Movies</h2>
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
                  thumbnailTrending={media.thumbnailRegular}
                />
              );
            })}
          </div>
        </div>

        <footer className="section__footer"></footer>
      </section>
    </div>
  );
}

export default Movies;
