import React, { useState, useCallback, useEffect } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //  fetch, json returns promise , here handling by then and catch
  // function fetchMoviesHandler(){
  //   fetch('https://swapi.dev/api/films').then((response)=>{
  //     return response.json()
  //   }).then((data)=>{
  //       const transformedMovies = data.results.map((movieData) => {
  //         return {
  //           key:movieData.episode_id,
  //           releaseDate:movieData.release_date,
  //           title:movieData.title,
  //           openingText:movieData.opening_crawl
  //         }
  //       })
  //       console.log(transformedMovies);
  //       setMovies(transformedMovies)
  //   })
  // }

  const fetchMoviesHandler = useCallback(async function () {
    try {
      setIsLoading(true); //https://swapi.dev/api/films
      setError(null); //
      const response = await fetch(
        "https://react-http-78955-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
      );
      if (!response.ok) {
        throw new Error("Some thing went wrong");
      }
      const data = await response.json();

      const loadedMovies = [];
      for (const key in data){
        loadedMovies.push({
          id:key,
          title:data[key].title,
          openingText:data[key].openingText,
          releaseDate:data[key].releaseDate
        })
      }
      setMovies(loadedMovies)

      // const transformedMovies = data.results.map((movieData) => {
      //   return {
      //     key: movieData.episode_id,
      //     releaseDate: movieData.release_date,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //   };
      // });
      // console.log(transformedMovies);
      // setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

async  function addMovieHandler(movie) {
    const response = await fetch('https://react-http-78955-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',{
      method:"POST",
      body: JSON.stringify(movie),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json()
    console.log(data);
  }

  let content = <p>Found no movies</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content} </section>
    </React.Fragment>
  );
}

export default App;
