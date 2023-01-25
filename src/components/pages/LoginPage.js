import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import {createUserWithEmailAndPassword} from "firebase/auth"
import '../../App.css'

export default function SignInPage() {
//     const [state,setState]=useState({
//         email:"",
//         password:""
//     })

// const submitHandler=async(e)=>{
//     e.preventDefault()
//     try {
//         await createUserWithEmailAndPassword(auth,state.email,state.password)
//         alert("User signed in sucessfully")
//     } catch (error) {
//         console.log(error)
//     }
// }

    return (
        <div className="text-center m-5-auto">
            
            <form action="" onSubmit={submitHandler}>

                <h2>Trends</h2>
                <p>
                    <br/>
                    <input placeholder='Email' type="text" name="first_name" required value={state.email}  onChange={e=>setState({...state,email:e.target.value})}/>
                </p>
                <p>
                    
                    
                    <br/>
                    <input placeholder='password' type="password" name="password" required value={state.password} onChange={e=>setState({...state,password:e.target.value})} />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                
            </footer>
        </div>
    )
}
