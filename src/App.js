import { useState, useEffect } from "react";

function App() {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5394a7e19a788439c4e00866a0c2bb6c&language=en-US&page=1');
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  }

//   const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Mzk0YTdlMTlhNzg4NDM5YzRlMDA4NjZhMGMyYmI2YyIsInN1YiI6IjY0YWJjNzQ2NjZhMGQzMDEzYTczNTZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HaIO4InZLA20VFOzNpoEJbvKae-oT35L13L9_gy9XIc'
//   }
// };

// fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
