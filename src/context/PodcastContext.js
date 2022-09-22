import  { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {getTokenFromUrl} from '../spotify'
import SpotifyWebApi from "spotify-web-api-js";

const spotify =  new SpotifyWebApi();
const PodcastContext = createContext('')

export const PodcastProvider =({children})=>{

    const [token,setToken] = useState();
    const [datae,setDatae] = useState([]);
    const [show,setShow] = useState({})
  
  useEffect(()=>{
    let _token  = sessionStorage.getItem('token')
    
    if(!_token){
      _token = getTokenFromUrl()
      sessionStorage.setItem('token',_token)
    }
    //  const _token = getTokenFromUrl()

    if(_token){
      setToken(_token)
  
      spotify.setAccessToken(_token)
      
  
      // spotify.searchShows('ranveer show').then((data)=>{
      //  if(!data.errors){
      //   setDatae(data.shows.items)
      //  }else{
      //   console.log("errors")
      //  }
      //   // console.log(data.shows.items)
      //   // console.log(_token)
       
  
      // })
    }
    },[])

    const searchShow =(show)=>{
      setTimeout(() => {
        spotify.searchShows(show).then((data)=>{
          if(!data.errors){
           setDatae(data.shows.items)
          }else{
           console.log("errors")
          }
          })
      }, 1000);    
    }

    const findShow = (id)=>{
      spotify.getShow(id).then((data)=>{
        if(!data.errors){
          // console.log(data)
          setShow(data)
          
        }
      })
    }
      const getFeed =()=>{
        spotify.getShows(['1ymvFxRf8M4wChKd1LC9mW','6ZcvVBPQ2ToLXEWVbaw59P','0TcsI1YxWMIUpXR6ARY3dO'])
        .then((data)=>{
          // console.log(data)
        })
      }

    return (
       <PodcastContext.Provider value={{
        token,
        datae,
        findShow,
        show,
        getFeed,
        searchShow
       }}>
        {children}
       </PodcastContext.Provider>
    )
}



export default PodcastContext;