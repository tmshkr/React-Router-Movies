import React from "react";
import MovieCard from "./MovieCard";
import movies from "../data/movies";
// import axios from "axios";

function MovieList(props) {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const getMovies = () => {
  //     axios
  //       .get("http://localhost:5000/api/movies")
  //       .then(response => {
  //         console.log(response.data);
  //         setMovies(response.data);
  //       })
  //       .catch(error => {
  //         console.error("Server Error", error);
  //       });
  //   };

  //   getMovies();
  // }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard {...props} key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
