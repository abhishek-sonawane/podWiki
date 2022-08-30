 function Dashboard({datae}){
const Playlists = datae.items.map((item)=>item.name)
console.log(Playlists)
    return(

        <div className="container">
           {/* {datae.items.map((item)=>{
           ( <p>{item.name}</p>)
           })} */}
           <p>{datae}</p>
        </div>
    )
}



export default Dashboard;