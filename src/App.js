import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MovieDetails from "./pages/MovieDetails";
import MoviesGrid from "./components/MoviesGrid";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <header>
         <Link to="/"> <h1 className={styles.title}>Movies</h1></Link>
       <Link to="movie">Movie</Link>
      </header>

      <main>

        {/* ELEMENT Y AL COMPONENTE QUE QUIERO QUE ME LLEVE ------------- */}
        <Routes>
          <Route path="/" element={<LandingPage/>}/>

        {/* --- ACA UTILIZARIA EL USEPARAMS --- */}
          <Route exact path="/movies/:movieId" element={<MovieDetails/>}/>
        </Routes>

 
      </main>
      
    </BrowserRouter>
  );
}

export default App;
