import React from "react";
import Card from "../Card/Card";
import "../../App.scss";
import "./assets/Container.scss";

const Container = ({ data }) => {
  return (
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
  );
};

export default Container;
