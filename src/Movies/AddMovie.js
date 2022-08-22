import { useState } from "react";
import {PostData} from "./movieSlice";
import {addMovie} from "./movieSlice";
import { useDispatch } from "react-redux";
function AddMovie(){
    const dispatch=useDispatch()
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [rating,setRating] =useState('')
    const [director,setDirector] = useState('')

    const handleChange = (e, key) => {
        if (key === 'title') setTitle(e.target.value);
        if (key === 'date') setDate(e.target.value);
        if (key === 'Rating') setRating(e.target.value);
        if (key === 'director') setDirector(e.target.value);
    }

    const addNewMovie = (e) => {
        e.preventDefault();
        const newMovieData = {
            Title: title,
            Release: date,
            IMDB:rating,
            Director:director
        }
       
        dispatch(PostData(newMovieData))
        dispatch(addMovie(newMovieData));

        console.log("added");
    }
    return (<div><form>
        <div className='login-form'>
            <input type='text' placeholder='Title' onChange={(e) => handleChange(e, 'title')} />
            <br />
            <input type='text' placeholder='Release Date' onChange={(e) => handleChange(e, 'date')}/>
            <br />
            <input type='text' placeholder='Rating' onChange={(e) => handleChange(e, 'Rating')}/>
            <br />
            <input type='text' placeholder='Director' onChange={(e) => handleChange(e, 'director')}/>
            <br />
            <button className='btn btn-primary' onClick={(e)=>addNewMovie(e)} >
                Add
            </button>
        </div>
    </form></div>)
}
export default AddMovie;