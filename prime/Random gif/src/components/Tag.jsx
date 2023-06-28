import axios from "axios"
import { useEffect, useState } from "react"
import Spinner from "./Spinner"
import useGif from "../hooks/useGif"


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

 const Tag = () => {
  const [tag, setTag] = useState('car')
  
  const {gif, loading, fetchData} = useGif(tag)

  return(
    <div className="bg-[#60a5fa] w-1/2 mt-[15px] border-2 rounded-xl border-black flex flex-col items-center  underline-4 p-3	 ">
      <h1 className="text-3xl underline uppercase mb-3 font-bold">Random {tag} GIF</h1>
      {
        loading ? <Spinner /> : <img src={gif} alt="" width={450}/>
      }
      
      <input value={tag}
      className="w-11/12 text-lg py-2 rounded-lg mt-3 mb-3 text-center"
      onChange={(event)=> setTag(event.target.value)} />

      <button onClick={()=> fetchData(tag)}
      className="bg-[#c9f5d9] w-11/12 h-9 rounded-md uppercase font-bold  mb-3">
        Generate
      </button>
    </div>
  )
}

export default Tag;
