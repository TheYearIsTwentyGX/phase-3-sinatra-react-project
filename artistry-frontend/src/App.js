import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Artist from './Components/Artist';
import ArtistList from './Components/ArtistList';
import { ArtistProvider } from './Context/ArtistContext';
import ArtistForm from './Components/ArtistForm';

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
          <Route path='/AddArtist'>
            <ArtistForm />
          </Route>
        </Switch>
        <div className='formDiv'>
          <ArtistForm></ArtistForm>
        </div>
      </ArtistProvider>
    </div>
  );
}

export default App;
