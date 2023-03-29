import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Artist from './Components/Artist';
import ArtistList from './Components/ArtistList';

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
		<ArtistList props={artists}/>
		{/* <Routes>

			<Route exact path="/">
			</Route>
			<Route path="/artists/:id">
				<Artist props={artists}/>
			</Route>
		</Routes> */}
    </div>
  );
}

export default App;
