import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './spotify'
import Dashboard from './Dashboard.jsx'
import SpotifyWebApi from 'spotify-web-api-js';


const spotify = new SpotifyWebApi();

function App() {
  const [token,setToken] = useState();
  const [datae,setDatae] = useState();

  useEffect(()=>{
   const _token = getTokenFromUrl()
   window.location.hash = "";
  if(_token){
    setToken(_token)

    spotify.setAccessToken(_token)

    spotify.getUserPlaylists().then((data)=>{
     if(!data.errors){
      setDatae(data)
     }else{
      console.log("errors")
     }
      console.log('user',data)


    })
  }
    // console.log(`access token : ${getTokenFromUrl()}`)
  },[])

  return (
    <div className='app' >
    
       {token?<Dashboard datae={datae}/>:<Login />} 
  
    </div> 
  );
}

export default App;
