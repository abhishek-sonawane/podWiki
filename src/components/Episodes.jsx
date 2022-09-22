import SpotifyWebApi from 'spotify-web-api-js';
import { useLocation ,useParams } from 'react-router-dom';
import { useContext } from 'react';
import PodcastContext from '../context/PodcastContext';
import { useEffect } from 'react';



const spotify = new SpotifyWebApi()



function Episodes(){

  const {id} = useParams()
const {show,findShow} = useContext(PodcastContext)
useEffect(()=>{
  findShow(id)
console.log('these are shows details and episoes',show.episodes&&show.episodes.items.map((item)=>item.name))
//  console.log(episodes.items.map((item)=>item.name))
},[])

function msConversion(millis) {
    let sec = Math.floor(millis / 1000);
    let hrs = Math.floor(sec / 3600);
    sec -= hrs * 3600;
    let min = Math.floor(sec / 60);
    sec -= min * 60;
  
    sec = '' + sec;
    sec = ('00' + sec).substring(sec.length);
  
    if (hrs > 0) {
      min = '' + min;
      min = ('00' + min).substring(min.length);
      return hrs + ":" + min + ":" + sec;
    }
    else {
      return min + ":" + sec;
    }
  }
  
    return(
      <div>
        <div className='bg-base-100 py-24 flex flex-row flex-wrap justify-center gap-9 text-3xl p-8 '>
        <img  className=' rounded-full' src={show.images&&show.images[1].url} alt="" />
         <div className=' self-center flex flex-col'>
         <h1 className=' font-bold text-5xl' >
            {show.name}
          </h1>
          <p className=' pt-10 text-xl lg:text-left  font-medium' >{show.publisher}</p>

          <p className=' max-w-xl text-base rounded-2xl mt-2  py-3  ' >{show.description}</p>
         </div>
        </div>



       <p className='text-2xl font-bold text-center p-7' >EPISODES :</p>
        <div className=' flex flex-row flex-wrap justify-center gap-8'>
         
            {show.episodes?show.episodes.items.map((item)=>{
                return (
                  <>
                  <div className=" hover:bg-slate-700 max-w-lg transition-all card lg:max-w-5xl lg:card-side bg-slate-800 shadow-2xl ">
                    <figure><img width={350} className=' pt-8 lg:p-0 shadow-xl p-2 lg:w-64'  src={item.images[0].url} alt="Album"/></figure>
                    <div className="card-body px-16 py-7  max-w-xl lg:max-w-max">
                      <h2 className="card-title">{item.name}</h2>
                      <p className='w-full' >{`${item.description.slice(0,200)} ....`}</p>
                      <div className="card-actions justify-end py-1">
                        <div className=' btn btn-ghost mr-16' >{msConversion(item.duration_ms)}</div>
                        <button className="btn btn-primary"><a target='_blank' href={item.external_urls.spotify}> listen now</a></button>

                      </div>
                    </div>
                </div>
                  </>
                )
              }):<>Loading</>
            }  

        </div>
      </div>
)
}


export default Episodes;