import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import { useState, useEffect } from "react";
import { searchIfIsBookmarked } from "../utils/searchByCategory";
import { searchByInput } from "../utils/searchByInput";
import Container from "../Components/Container/Container";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Bookmarked({ data }) {
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const [bookmarkedData, setBookmarkedData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState([]);

  useEffect(() => {
    if (loggedIn === false) {
      navigate("/login");
    }
  }, []);

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
            <Container data={dataToDisplay} />
          </div>

          <footer className="section__footer"></footer>
        </section>
      </main>
    </div>
  );
}

export default Bookmarked;
