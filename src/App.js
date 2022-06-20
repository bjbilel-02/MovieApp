import { useState } from 'react';
import './App.css';
import Movielist from './Components/Movielist';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { moviesData } from './Components/Data'
import Addmovie from './Components/Addmovie';
import Filtre from './Components/Filtre';

function App() {
  const [movies,setMovies]=useState(moviesData)

  const [inputSearch , setInputSearch] = useState("")
  
  const Add = (newMovie) =>{
    setMovies([...movies, newMovie])
  };
  return (
    <div className="App">
      { <Filtre inputSearch = {inputSearch} setInputSearch = {setInputSearch} /> }
      <Movielist movies={movies} inputSearch = {inputSearch} />
      { <Addmovie Add={Add}/> }
      
      
      </div>
  );
}

export default App;
