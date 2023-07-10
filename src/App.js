import { useState, useEffect } from "react";
import Movie from './Movie';
import './App.css'

function App() {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5394a7e19a788439c4e00866a0c2bb6c&language=en-US&page=1');
    const movies = await data.json();
    setPopular(movies.results);
  }

  return (
    <div className="App">
      <div className="popular-movies">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />
        })}
      </div>
    </div>
  );
}

export default App;
