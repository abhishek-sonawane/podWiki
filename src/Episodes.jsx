import SpotifyWebApi from 'spotify-web-api-js';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';



const spotify = new SpotifyWebApi()



function Episodes(){
  const location = useLocation()
  const { id } = location.state


    const tok = 'BQC-27TXa3N1FTp5sLMwzfoO8VhN_yHqkG18pdKVGL3cr2FuWV0I2paHs5TgaWPOzCvdrFCA4tsV9c1dlOeV2Ir7z3qoEQFupzBVd7WaIKHaMxySLwKNpMKoHZTTqf9TZrXLD85xahJ3NIIJSwZkw58ZbAcMhlya-N1ArWYktpkRmh0-a53y1Z7ZJ3avK2zcfxPwlTK6xPNinT1-bviGgm2RiIas1Q'

    spotify.setAccessToken(tok)
   
    spotify.getShowEpisodes(id).then(data=>{
            console.log(data)
            var epis =  data.items.map((item)=>{
                return item.name
             })
             console.log(epis)
        })
    

    return(
        <div>
           
        </div>
    )
}


export default Episodes;