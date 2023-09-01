import Card from "../Components/Card/Card";
import Navbar from "../Components/Navbar/Navbar";

import Header from "../Components/Header/Header";

function Bookmarked() {
  return (
    <div className="Bookmarked">
      <Navbar />
      <Header />
      <main className="main">
        <section className="section section--recommendation">
          <header className="section__header">
            <h2 className="section__header__title">Movies</h2>
          </header>

          <div className="section__main">
            <div className="container">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>

          <footer className="section__footer"></footer>
        </section>
      </main>
    </div>
  );
}

export default Bookmarked;
