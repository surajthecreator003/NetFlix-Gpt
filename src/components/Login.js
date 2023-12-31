//React gets imported itself
import { checkValidData } from "../utils/validate";
import Header from "./Header";
import {useState,useRef} from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
//import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constant";




const Login = () => {

  //const navigate=useNavigate();
  const dispatch=useDispatch();
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);

  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);


  const handleButtonClick=()=>{
    //Validate the form data
    //checkValidData(email,password)

    console.log(email.current.value);
    console.log(password.current.value);

    const message=checkValidData(email.current.value,password.current.value);
    setErrorMessage(message)

    console.log(message);

    //After validate we do sign in or signup using firebase authentication here

    if(message) return ; // if message is present return from here
    
    if(!isSignInForm){

      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value ,password.current.value)
        .then((userCredential) => {
        const user = userCredential.user;

        //update path
          updateProfile(user, {
            displayName: name.current.value, photoURL:USER_AVATAR
          }).then(() => {
            // Profile updated!
            //to get updated value we are taking all values from auth.currentUser rather than from user which has old data
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayname:displayName,photoURL:photoURL}))
            //navigate("/browse")
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });
        
          console.log(user)//if response sucess print the user object
          //navigate("/browse") //deleting this as ounce my profile gets updated then navigate
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage)
        });

    }else{

      //SignIn Logic
      signInWithEmailAndPassword(auth, email.current.value ,password.current.value)
      .then((userCredential) => { 
      const user = userCredential.user; 
      console.log(user);
      //navigate("/browse")
        })  
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage);
        });

    }

    
  }

  const toggleSignInForm=() => {
    setIsSignInForm(!isSignInForm)
  }
  return ( 
    <div>
      <Header />
      
      <div className="absolute">
      <img src={BG_URL} alt="background" />

      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

        <h1 className="font-bold text-xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (<input ref={name} type="text" placeholder="Name" className="bg-gray-500 p-4 my-4 w-full" />)}

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