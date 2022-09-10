import { Link } from "react-router-dom";




function Dashboard({datae}){
// const Playlists = datae.items.map((item)=>item.name)
// console.log(Playlists)
    return(

        <div className="container">
           {datae.map((item)=>{
            
            return (
                <>
                <p>{item.name}</p>
                <img src={item.images[1].url} alt="" />
                <Link state={{id:item.id}}  to='/episode'>see episodes</Link>
                </>
            )
           })}
           {/* <p>{datae}</p> */}
        </div>
    )
}



export default Dashboard;