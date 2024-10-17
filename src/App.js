/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
 
  return (
    <>
    <NavBar/>
    <Main/>
    </>
  );
}

function NavBar(){
  return(
    <nav className="nav-bar">
        <Logo/>
        <Search/>
        <NumResults/>
     </nav>
  ) 

}

function Logo(){
  return(
    <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
  )
}

function Search(){
  const [query, setQuery] = useState("");
  return(
    <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
  )
}

function NumResults(){
  return(
    <p className="num-results">
          Found <strong>X</strong> results
        </p>
  )
}

function Main(){
  
  return(
    <main className="main">
      <ListBox/>
      <WatchedBox/>
     </main>
  )
}

function ListBox(){
  const [isOpen1, setIsOpen1] = useState(true);
return(
<div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
       <MovieList/>
      )}
    </div>
)
}

function MovieList(){
  const [movies, setMovies] = useState(tempMovieData);
  return(
    <ul className="list">
    {movies?.map((movie) => (
      <Movie movie={movie}  key={movie.imdbID}/>
    ))}
  </ul>
  )
}
 
function Movie({movie}){
  return(
    <li>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
          </p>
        </div>
      </li>
  )
}
function WatchedBox(){
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return(
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
        <WatchedBox watched={watched}/>

          <ul className="list">
            {watched.map((movie) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

function WatchedSummury({watched}){

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return(
    <div className="summary">
            <h2>Movies you watched</h2>
            <div>
              <p>
                <span>#️⃣</span>
                <span>{watched.length} movies</span>
              </p>
              <p>
                <span>⭐️</span>
                <span>{avgImdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{avgUserRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{avgRuntime} min</span>
              </p>
            </div>
          </div>
  )
}

// import { useEffect, useState } from "react";

// import { Button, CircularProgress } from "@mui/material";
// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

// const tempWatchedData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     Title: "Back to the Future",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

// const average = (arr) =>
//   arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
// let serverCallForMovieData = () => {
//   return new Promise((resolve) => {
//     let randomSeconds = Math.floor(Math.random() * 10 + 1);
//     setTimeout(() => {
//       console.log("Returning server data after : ", randomSeconds, " seconds.");
//       resolve(tempMovieData);
//     }, randomSeconds * 1000);
//   });
// };
// export default function App() {
//   const [query, setQuery] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [movies, setMovies] = useState([]);
//   const [watched, setWatched] = useState([]);
//   const [isOpen1, setIsOpen1] = useState(true);
//   const [isOpen2, setIsOpen2] = useState(true);

//   const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
//   const avgUserRating = average(watched.map((movie) => movie.userRating));
//   const avgRuntime = average(watched.map((movie) => movie.runtime));

//   useEffect(() => {
//     function dataFromServer() {
//       setLoading(true);
//       serverCallForMovieData()
//         .then((data) => {
//           setLoading(false);
//           setMovies(data);
//         })
//         .catch((error) => {
//           console.log("Error asche !", error);
//         });
//     }
//     dataFromServer();
//   }, []);

//   useEffect(() => {
//     if (movies?.length) {
//       setWatched(tempWatchedData);
//     }
//   }, [movies]);
//   const [serverData, setServerData] = useState();
//   const [serverLoading, setServerLoading] = useState(false);

//   const getDataFromServer = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         return response.json();
//       })
//       .then((json) => {
//         let res = json;
//         console.log("response : ", res);
//         setServerData(res);
//       });
//   };

//   useEffect(() => {
//     if (serverData) {
//       console.log("Data cole asche", serverData);
//     }
//   }, [serverData]);
//   return (
//     <>
//       <nav className="nav-bar">
//         <div className="logo">
//           <span role="img">🍿</span>
//           <h1>usePopcorn</h1>
//         </div>
//         <input
//           className="search"
//           type="text"
//           placeholder="Search movies..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <p className="num-results">
//           Found <strong>{movies.length}</strong> results
//         </p>
//       </nav>

//       <main className="main">
//         <Button onClick={getDataFromServer}>Get data from Server</Button>
//         {loading ? (
//           <CircularProgress />
//         ) : (
//           <div className="box">
//             <button
//               className="btn-toggle"
//               onClick={() => setIsOpen1((open) => !open)}
//             >
//               {isOpen1 ? "–" : "+"}
//             </button>
//             {isOpen1 && (
//               <ul className="list">
//                 {movies?.map((movie) => (
//                   <li key={movie.imdbID}>
//                     <img src={movie.Poster} alt={`${movie.Title} poster`} />
//                     <h3>{movie.Title}</h3>
//                     <div>
//                       <p>
//                         <span>🗓</span>
//                         <span>{movie.Year}</span>
//                       </p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         )}

//         <div className="box">
//           <button
//             className="btn-toggle"
//             onClick={() => setIsOpen2((open) => !open)}
//           >
//             {isOpen2 ? "–" : "+"}
//           </button>
//           {isOpen2 && (
//             <>
//               <div className="summary">
//                 <h2>Movies you watched</h2>
//                 <div>
//                   <p>
//                     <span>#️⃣</span>
//                     <span>{watched.length} movies</span>
//                   </p>
//                   <p>
//                     <span>⭐️</span>
//                     <span>{avgImdbRating}</span>
//                   </p>
//                   <p>
//                     <span>🌟</span>
//                     <span>{avgUserRating}</span>
//                   </p>
//                   <p>
//                     <span>⏳</span>
//                     <span>{avgRuntime} min</span>
//                   </p>
//                 </div>
//               </div>

//               <ul className="list">
//                 {watched.map((movie) => (
//                   <li key={movie.imdbID}>
//                     <img src={movie.Poster} alt={`${movie.Title} poster`} />
//                     <h3>{movie.Title}</h3>
//                     <div>
//                       <p>
//                         <span>⭐️</span>
//                         <span>{movie.imdbRating}</span>
//                       </p>
//                       <p>
//                         <span>🌟</span>
//                         <span>{movie.userRating}</span>
//                       </p>
//                       <p>
//                         <span>⏳</span>
//                         <span>{movie.runtime} min</span>
//                       </p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>
//       </main>
//     </>
//   );
// }
