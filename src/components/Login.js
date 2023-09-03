//React gets imported itself
import Header from "./Header";
import {useState} from "react";



const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true)

  const toggleSignInForm=() => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/71ff1ceb-accf-473e-8e85-8736bc0c3aca/NL-en-20230828-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="background" />
      </div>

      <form className="text-white w-3/12 absolute p-12 bg-black my-36 mx-auto rigt-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input type="text" placeholder="Name" className="bg-gray-500 p-4 my-4 w-full" />)}
        <input type="text" placeholder="Email Address" className="bg-gray-500 p-4 my-4 w-full" />
        <input type="password" placeholder="Password" className="bg-gray-500 p-4 my-4 w-full" />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p onClick={toggleSignInForm} className="py-4 cursor-pointer">{isSignInForm ? "New to Netflix GPT ? Sign Up" : "Already registered ? Sign In Now and Chill !"}</p>
      </form>
      
    </div>
  )
}

export default Login;