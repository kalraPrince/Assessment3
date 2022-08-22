import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchMovies = createAsyncThunk('/Movies/fetchMovies',async ()=>{
    try{
        const result=await axios.get('http://localhost:3001/movieDetails')
       console.log(result);
        return result.data
    }
    catch(e){
        console.log(e)
    }
    })
    export const PostData=createAsyncThunk('/Movies/fetchMovies',async(Data)=>{
        try{
          const Result=await axios.post("http://localhost:3001/movieDetails",Data)
            console.log("POst method")
            return Result.data
        }
        catch(err){
            console.log(err)
        }
     })
     export const DeleteData=createAsyncThunk('/Movies/fetchMovies',async(itemid)=>{
        try{
          const Result=await axios.delete(`http://localhost:3001/movieDetails/${itemid}`)
            console.log("Delete method")
            return Result.data
        }
        catch(err){
            console.log(err)
        }
     })

    const initialValue={
        moviesData:[],
        loading:true
    }

    const movieSlice = createSlice({
        name:'movie',
        initialState:{
            value:initialValue
        },
        reducers:{
            addMovie : (state,action)=>{
                console.log('action is triggered on add Movie',action)
                state.value.moviesData = action.payload
            },
            deleteMovie:(state,action)=>{
                console.log("delete movie")
                state.value.moviesData =state.value.moviesData.filter((item)=>item.id!==action.payload)
            }

        },
        extraReducers:{
            [fetchMovies.pending]:(state,action)=>{
                console.log("pending",action)
                state.loading=true
            },
            [fetchMovies.fulfilled]:(state,action)=>{
                console.log('fullfiled',action)
                state.loading=false
                state.value.moviesData=[...state.value.moviesData,...action.payload]
                
            },
            [fetchMovies.rejected]:(state,action)=>{
                console.log('fullfiled',action)
                state.loading=false
            }
        }
    })
    export default movieSlice.reducer;
    export const{addMovie, deleteMovie}=movieSlice.actions