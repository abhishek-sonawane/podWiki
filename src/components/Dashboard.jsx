import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import PodcastContext from "../context/PodcastContext";


function Dashboard(){
// const Playlists = datae.items.map((item)=>item.name)
// console.log(Playlists)
let Navigate = useNavigate()
const {datae,findEpisodes ,searchShow} = useContext(PodcastContext)
const [query,setQuery] = useState('')
const [SearchQueryDisplay,setSearchQueryDisplay] =useState('')
const [queried, setQueried] = useState(false)
const gotoEpisode = (id)=>{
    findEpisodes(id)
    Navigate("/episode")
}

const textHandler =(e)=>{
    console.log(e.target.value)
    setQuery(e.target.value)
}

const submithandler =(e)=>{
    e.preventDefault()
    searchShow(query)
    setSearchQueryDisplay(query)
    setQueried(true)
    setQuery('')
}
    return(

    <div >
         
         
                 {/* input field */}
            <div className=" input grid place-content-center p-20">
            <div className="form-control">
                <form onSubmit={submithandler} >
                <div className="input-group">
                    <input onChange={textHandler} type="text" value={query} placeholder="Search…" className="input input-bordered" />
                    <button type="submit" className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
                </form>
                </div>

            </div>
            
            {/* queries result mapped */}
           {queried&& <div className="text-center" >
            search results for {SearchQueryDisplay}
            </div>}
        <div className=" p-6 flex flex-row justify-center flex-wrap gap-8" >
           {datae.length?datae.map((item)=>{
            return(
                <>
                    <div className="card w-96 bg-base-200 shadow-xl image-full">
                    <figure><img src={item.images[0].url} alt="podcast image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">{item.name}</h2>
                        <p>{item.publisher}</p>
                        <div className="card-actions justify-end">
                        <Link to={`/${item.id}`}>
                        <button /*onClick={()=>{gotoEpisode(item.id)}}*/
                        className="btn btn-primary">Get Episodes</button>
                        </Link>
                        </div>
                    </div>
                    </div>
                </>
            )
           }):  <>{queried&&<svg xml version="1.1" id="L9"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           enableBackground="new 0 0 0 0" xmlSpace="preserve">
           <path fill="#e74c3c" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
           <animateTransform 
           attributeName="transform" 
           attributeType="XML" 
           type="rotate"
           dur="1s" 
           from="0 50 50"
           to="360 50 50" 
           repeatCount="indefinite" />
    
           </path>
            </svg>}</>}

        </div>
    </div>
    )
}



export default Dashboard;