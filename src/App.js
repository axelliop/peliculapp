import './App.css';

import MoviesGrid from './components/MoviesGrid';
import logo from './logo.svg';
import styles from './App.module.css'

function App() {
  return (
<div>
  <header>
    <h1 className={styles.title}>Movies</h1>
  </header>

    <main>
<MoviesGrid/>
    </main>

</div>
  );
}

export default App;
