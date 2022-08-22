import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovie, fetchMovies } from "./movieSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { DeleteData } from "./movieSlice";
import { deleteMovie } from "./movieSlice";
import "./Dashboard.css"

const Dashboard=()=>{
    
    const dispatch=useDispatch()
   
 
    const {loading, moviesData} = useSelector((state)=>state.movie.value)
    const[sorData,setSortData]=useState(moviesData)
    useEffect(()=>{
        dispatch(fetchMovies())
        console.log("sordata is",sorData);
        // const temp=[...sorData].sort((a,b)=>b.Release-a.Release)
   
    //   setSortData(temp)
   
    },[dispatch])
    const temp=[...moviesData].sort((a,b)=>a.Release-b.Release)
    const DeleteMovie=(itemid) => {
     console.log(itemid)
     dispatch(DeleteData(itemid))
        dispatch(deleteMovie(itemid))
    }
    
    console.log("sordata is",sorData);
    return(
        <div>
            
            <h1>List of Movies</h1>
           
            {
             
                temp.map((item)=>(
                    
                    <div className="card"><div className="card__image">
                    <img src="https://media.gettyimages.com/vectors/cinema-poster-with-cola-filmstrip-and-clapper-vector-vector-id1244034031?s=612x612" />
                  </div>
                  
                  <div >
                      <h1 style={{margin:0}}>{item.Title}</h1>
                      <h2>{item.Director}</h2>
                      <h2>Release Date : {item.Release}</h2>
                      <h2>Rating : {item.IMDB}</h2>
                    
                      <button className="btn btn-primary" style={{margin:2}} onClick={() => DeleteMovie(item.id)}>Delete Movie</button>
                  </div>
                </div>
                ))
            }
        </div>
    )
}
export default Dashboard