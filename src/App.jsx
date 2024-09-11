import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import fetchJsonData from "./fetchJsonData";
import Movie from "./components/Movie";

function App() {
  const [movieData, setMovieData] = useState(null); // State for movie data

  useEffect(() => {
    fetchJsonData("./src", "movie.json")
      .then((data) => {
        console.log("Fetched data:", data);
        setMovieData(data); // Store the data in state
      })
      .catch((error) => {
        console.error("Error fetching JSON:", error);
      });
  }, []);

  return (
    <>
      <Header />
      {movieData ? (
        <div className="container">
          <div className="main">
            {/* Use map to generate Movie components */}
            {movieData.map((movie, index) => (
              <Movie
                key={index}
                name={movie.Title}
                location={movie.Poster}
                year={movie.Year}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
