import "./App.scss";
import { useEffect, useState } from "react";
import { searchByInput } from "./utils/searchByInput";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import Container from "./Components/Container/Container";

function App({ data }) {
  const [dataToDisplay, setDataToDisplay] = useState([]);

  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  useEffect(() => {
    if (loggedIn === false) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    setDataToDisplay(data);
  }, [data]);

  const handleSearch = (search) => {
    setDataToDisplay(searchByInput(data, search));
  };

  return (
    <div className="App">
      <Navbar page={"main"} />
      <Header handleSearch={(search) => handleSearch(search)} />

      <main className="main">
        <section className="section section--trending" id="trending">
          <header className="section__header">
            <h2 className="section__header__title">Trending</h2>
          </header>

          <div className="section__main">
            <div className="container container--vertical">
              <div className="viewport">
                {dataToDisplay.map((media, key = 0) => {
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
            <Container data={dataToDisplay} />
          </div>

          <footer className="section__footer"></footer>
        </section>
      </main>
    </div>
  );
}

export default App;
