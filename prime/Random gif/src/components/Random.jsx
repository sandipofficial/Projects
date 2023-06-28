import axios from "axios"
import { useEffect, useState } from "react"
import Spinner from "./Spinner"
import useGif from "../hooks/useGif"


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

 const Random = () => {


  const {gif, loading, fetchData} = useGif()


  return(
    <div className="bg-green-400 w-1/2 mt-[15px] border-2 rounded-xl border-black flex flex-col items-center  underline-4 p-3	 ">
      <h1 className="text-3xl underline uppercase mb-3 font-bold">A Random GIF</h1>
      {
        loading ? <Spinner /> : <img src={gif} alt="" width={450}/>
      }
      

      <button onClick={()=> fetchData()}
      className="bg-[#c9f5d9] w-11/12 h-9 rounded-md uppercase font-bold mt-3 mb-[20px]">
        Generate
      </button>
    </div>
  )
}

export default Random;
