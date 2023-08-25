import React from "react";
import "./assets/Card.scss";
import { ReactComponent as IconCatMovies } from "./assets/images/icon-category-movie.svg";
import { ReactComponent as BookmarkEmpty } from "./assets/images/icon-bookmark-empty.svg";
import { ReactComponent as BookmarkFull } from "./assets/images/icon-bookmark-full.svg";

import { ReactComponent as PlayButton } from "./assets/images/icon-play.svg";

// import image from "../../assets/images/thumbnails/1998/trending/large.jpg";

const Card = ({
  title,
  year,
  isBookmarked,
  thumbnailRegular,
  thumbnailTrending,
  rating,
  category,
}) => {
  console.log(thumbnailTrending);
  return (
    <div className="card">
      <div className="card__header">
        <button className="btn btn--bookmark">
          <BookmarkEmpty className="icon-bookmark icon-bookmark--empty" />
          {/* <BookmarkFull className="icon-bookmark icon-bookmark--full" /> */}
        </button>
      </div>

      <div className="card__main">
        <div className="thumbnail-wrapper">
          <img className="thumbnail" src={thumbnailRegular} alt=""></img>

          <img className="thumbnail" src={thumbnailTrending} alt=""></img>
        </div>

        <button className="btn btn--play">
          <PlayButton />
          Play
        </button>
      </div>

      <div className="card__footer">
        <div className="metadata">
          <p className="date">{year}</p>
          <span>・</span>
          <p className="type">
            <IconCatMovies />
            {category}
          </p>
          <span>・</span>
          <p className="PG">{rating}</p>
        </div>

        <h3 className="title">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
