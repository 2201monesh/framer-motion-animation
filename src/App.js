import { useState, useEffect } from "react";
import Movie from './Movie';
import './App.css'
import Filter from "./Filter";
import { motion } from "framer-motion";

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5394a7e19a788439c4e00866a0c2bb6c&language=en-US&page=1');
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  }

  return (
    <div className="App">

     <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />

      <motion.div layout className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />
        })}
      </motion.div>
    </div>
  );
}

export default App;
