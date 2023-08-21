import Card from "../Components/Card/Card";

function Bookmarked() {
  return (
    <div className="Bookmarked">
      {/* <Navbar />
      <Header /> */}

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
    </div>
  );
}

export default Bookmarked;
