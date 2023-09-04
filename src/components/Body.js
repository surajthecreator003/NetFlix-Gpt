import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";






const Body = () => {
    const dispatch=useDispatch();
    //const navigate=useNavigate()

    const appRouter=createBrowserRouter(
        [
            {
                path:"/",
                element:<Login />
            },
            { 
                path:"/browse",
                element:<Browse />
            }
        ]
    )

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            //if user signs up for first time this will be called if user signs then also call this
            //and also if user signs out it listens for real time change
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayname:displayName}))
              //navigate("/browse")
              // ...
            } else {
              // User is signed out
              dispatch(removeUser()); 
              //navigate("/")//as if user signs out navigate to main page
              // ...
            }
          }); 
    },[])
 
    return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body