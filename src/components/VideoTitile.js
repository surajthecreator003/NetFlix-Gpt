import React from 'react'

const VideoTitile = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black pt-[20%] px-24 absolute text-white">

       <h1 className="text-6xl font-bold">{title}</h1>
       <p className="py-6 text-lg w-1/4">{overview}</p>

       <div classname="">
           <button className= "hover:bg-opacity-80 bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">▶Play</button>
           <button className= "mx-2 bg-gray-500 p-4 px-12 text-white text-xl bg-opacity-50 rounded-lg">More Info</button>
       </div>

    </div>
  )
}

export default VideoTitile