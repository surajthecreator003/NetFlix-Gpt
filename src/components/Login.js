//React gets imported itself
import { checkValidData } from "../utils/validate";
import Header from "./Header";
import {useState,useRef} from "react";



const Login = () => {

  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);

  const email=useRef(null);
  const password=useRef(null);
  //const name=useRef(null);


  const handleButtonClick=()=>{
    //Validate the form data
    //checkValidData(email,password)

    console.log(email.current.value);
    console.log(password.current.value);

    const message=checkValidData(email.current.value,password.current.value);
    setErrorMessage(message)

    console.log(message);


    //After validate we do sign in or signup
  }

  const toggleSignInForm=() => {
    setIsSignInForm(!isSignInForm)
  }
  return ( 
    <div>
      <Header />
      
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />

      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

        <h1 className="font-bold text-xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (<input  type="text" placeholder="Name" className="bg-gray-500 p-4 my-4 w-full" />)}

        <input ref={email} type="text" placeholder="Email Address" className="bg-gray-500 p-4 my-4 w-full" />

        <input ref={password} type="password" placeholder="Password" className="bg-gray-500 p-4 my-4 w-full" />

        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button onClick={handleButtonClick} className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <p onClick={toggleSignInForm} className="py-4 cursor-pointer">{isSignInForm ? "New to Netflix GPT ? Sign Up" : "Already registered ? Sign In Now and Chill !"}</p>

      </form> 

    </div>
  )
}

export default Login;