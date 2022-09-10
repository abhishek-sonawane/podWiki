import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './spotify'
import Dashboard from './Dashboard.jsx'
import SpotifyWebApi from 'spotify-web-api-js';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import Episodes from './Episodes';


const spotify = new SpotifyWebApi();

function App() {
  const [token,setToken] = useState();
  const [datae,setDatae] = useState([]);

  useEffect(()=>{
   const _token = getTokenFromUrl()
   window.location.hash = "";
  if(_token){
    setToken(_token)

    spotify.setAccessToken(_token)

    spotify.searchShows('ranveer show').then((data)=>{
     if(!data.errors){
      setDatae(data.shows.items)
     }else{
      console.log("errors")
     }
      console.log(data.shows.items)
      console.log(_token)
     

    })
  }
    // console.log(`access token : ${getTokenFromUrl()}`)
  },[])

  return (
    <BrowserRouter>
   
    <Routes>
      <Route  path='/' element={
         <div className='app' >
    
         {token?<Dashboard datae={datae}/>:<Login />} 
    
      </div> 
      } />
      <Route path='/episode' element={<Episodes/>} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
