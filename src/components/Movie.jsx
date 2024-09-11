import React from "react";

const Movie = (prop) => {
  return (
    <div className="">
      <div className="movie-card">
        <img src={prop.location} alt="" className="movie-img" />
        <p className="movie-title">{prop.name}</p>
        <p className="movie-year">{prop.year}</p>
        <div className="movie-bottom-border"></div>

      </div>
    </div>
  );
};

export default Movie;
