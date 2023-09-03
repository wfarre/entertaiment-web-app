import Card from "../Components/Card/Card";
import { useEffect, useState } from "react";
import MediaFactory from "../factories/MediaFactory";
import Navbar from "../Components/Navbar/Navbar";

import Header from "../Components/Header/Header";

function Movies() {
  const [data, setData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState([])
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
        // console.log(filteredData);

        const medias = filteredData.map(
          (media) => new MediaFactory(media, "json"),
        );
        setData(medias);
        setDataToDisplay(medias)
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);


  const handleSearch = (search) => {

    if(search.length === 0){
      setDataToDisplay(data)
    }

    if(search.length > 0){
      const newData = data.filter(data => {
        console.log(data.title.includes(search.toLowerCase()));
        return data.title.toLowerCase().includes(search.toLowerCase())
      }
        
        )
        console.log(newData);
      setDataToDisplay(newData)
    }
    
  }

  return (
    <div className="Movies">
      <Navbar page={"movies"} />
      <Header handleSearch = {(search) => handleSearch(search)} />
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
