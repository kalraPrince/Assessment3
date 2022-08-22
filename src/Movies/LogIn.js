import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LogIn.css"

const Login=()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [userErr,setUsererr]=useState('')
    const [passwordErr,setPassworderr]=useState("")
    const bgstyle={color:"red"}

    const [login,setLogin]=useState(false)

    const handleChange=(e,key)=>{
        
        if(key==='username'){
            setUsername(e.target.value)
        }
        if(key==='password'){
            setPassword(e.target.value)
        }
    }
    const handleLogin=(e)=>{
        if(username==='admin'&&password==='admin'){
            setLogin(true) 
            console.log("true")   
        }
        else{
            setLogin(false)
            console.log("false")
        }
    }

    const handleBlurEvent=(e,key)=>{
        if(key==='username'){
         if(e.target.value){
             setUsererr(e.target.value)
             setUsererr('')
             
         }
         else{
             setUsererr('Please Enter the Username')
         }
        }
        if(key==='password'){
         if(e.target.value){
             setPassworderr(e.target.value)
             setPassworderr('')
         }
         else{
             setPassworderr('Please Enter the password')
         }
        }
       
     }


    return(
         <div>
          {
                login?<h1></h1>:<h2>Please login!</h2>
          }
          <div className="form">
          Username<input type='text' onChange={(e)=>handleChange(e,"username")} onBlur={(e)=>handleBlurEvent(e,'username')}></input>
          <h6 style={bgstyle}>{userErr}</h6>
          Password<input type='text' onChange={(e)=>handleChange(e,"password")} onBlur={(e)=>handleBlurEvent(e,'password')}></input>
          <h6 style={bgstyle}>{passwordErr}</h6>
          <Link to={username=='admin' && password=='admin'?'/Admin':'/Customer'}><button className="login-btn" onClick={(e)=>handleLogin(e)}>login</button></Link>
          {/* <Link to={this.username=='admin' && this.password=='admin' ? '/Admin' : '/Customer'}><button className="login-btn" onClick={(e)=>handleLogin(e)}>login</button></Link> */}
 
          </div>

          
        </div>
        
        
    )
}
export default Login