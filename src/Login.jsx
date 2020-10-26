import React from 'react';
import './Login.css';
import './spotify'
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className='login'>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="spotify-logo"/>
            
            <a href={loginUrl}>Login with spotify</a>
        </div>
    )
}

export default Login
