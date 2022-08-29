import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './spotify'

function App() {
  const [token,setToken] = useState()
  useEffect(()=>{
   const _token = getTokenFromUrl()
   setToken(_token)
    // console.log(`access token : ${getTokenFromUrl()}`)
  },[])

  return (
    <div >
      {token?<h1>hi</h1>:<Login />}
    </div>
  );
}

export default App;
