import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {

  const dispatch=useDispatch();
  
  const navigate=useNavigate();

  const user=useSelector(store => store.user);

  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      //navigate("/")
    // Sign-out successful.
    })
    .catch((error) => {
    // An error happened.
    navigate("/error")
    });
  }

  const handleGptSearchClick=()=>{
    //Toggle My GPT Search
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange=(e)=>{
    console.log(e.target.value)//or use useRef Hook
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
        //if user signs up for first time this will be called if user signs then also call this
        //and also if user signs out it listens for real time change
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayname:displayName,photoURL:photoURL}))

          navigate("/browse")
          
        } else {
          // User is signed out
          dispatch(removeUser()); 
          //navigate("/")//as if user signs out navigate to main page
          navigate("/")
        }
      }); 
      
      console.log("UseEffect of header");
      //unsubscribe when my component Unmoounts
      return ()=>unsubscribe();
  },[])

  return (

    <div className="flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full">
        <img className="w-44" src={LOGO} alt="Logo" />

        {user && 
          <div className="flex p-2">

            { showGptSearch &&
              <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>
            }

          <button className="py-2 px-4 mx-5 my-2 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchClick}>{showGptSearch ?"Home Pag" : "GPT Search"}</button>

          <img className="w-12 h-12 " alt="user-icon" src={user?.photoURL}/>

          <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>

        </div>
        }
        
    </div>
    
  )
}

export default Header