import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar';
import Characters from './components/characters/characters';
import Pagination from './components/pagination/pagination';

function App() {
  const [characterData, setCharacterData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [episodeData, setEpisodeData] = useState(null);
  const [info, setInfo] = useState({})
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacterData(data.results);
        setInfo(data.info)})
      }

      useEffect(()=>{
        fetchCharacters(url)
      }, []);
  

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };
  
  return (
    <main className="App bg-light">
      
        <Navbar brand="Rick and Morty App"/>

      <div className='container mt-5 '>
          <Pagination 
            prev={info.prev} 
            next={info.next} 
            onPrevious={onPrevious} 
            onNext={onNext}
          />
          <Characters characters={characterData} />
          <Pagination 
            prev={info.prev} 
            next={info.next} 
            onPrevious={onPrevious} 
            onNext={onNext}
          />
      </div>
    </main>
  );
}

export default App;
