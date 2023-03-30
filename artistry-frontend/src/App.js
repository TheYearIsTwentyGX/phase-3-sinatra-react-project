import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Artist from './Components/Artist';
import ArtistList from './Components/ArtistList';
import { ArtistProvider } from './Context/ArtistContext';

function App() {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9292/artists')
      .then(response => response.json())
      .then(data => setArtists(data));
  }, []);
  return (
    <div className="App">
      <ArtistProvider>

        <Switch>
          <Route exact path='/'>
            <ArtistList props={artists} />
          </Route>
          <Route path='/artists/:id'>
            <Artist />
          </Route>
        </Switch>
      </ArtistProvider>
    </div>
  );
}

export default App;
