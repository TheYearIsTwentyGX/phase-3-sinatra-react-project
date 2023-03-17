import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Artist from './Components/Artist';

function App() {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
  fetch('http://localhost:9292/artists')
    .then(response => response.json())
    .then(data => setArtists(data))
    .then(console.log(artists));
  }, []);

  return (
    <div className="App">
      {artists.map(artist => <Artist key={artist.id} props={artist} />)}
    </div>
  );
}

export default App;
