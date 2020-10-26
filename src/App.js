
import './App.css';
import Login from './Login.jsx'
import { getTokenFromUrl } from './spotify';
import React, { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player.jsx';
import { useDataLayerValue } from './DataLayer';



const spotify = new SpotifyWebApi();

function App() {

  const [{ playlists, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
   
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      
      spotify.setAccessToken(_token);
      
      spotify.getMe().then(user => {
        dispatch({
          type : 'SET_TOKEN',
          token: _token
        });
        dispatch({
          type : 'SET_USER',
          user: user
        });
      });
      
      spotify.getUserPlaylists()
      .then((playlists) => {
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists, 
        })
      });

      spotify.getPlaylist('5AB8YQbSCDEQYagQDn4so3')
      .then((discover_weekly) => {
        
        dispatch({
          type: 'SET_WEEKLY_DISCOVER',
          discover_weekly: discover_weekly
        })
      })
    }
  }, []);


  return (
    <div className="App">

      {
        token ? <Player spotify={spotify}/> :   <Login/>
      }

    </div>
  );
}

export default App;
