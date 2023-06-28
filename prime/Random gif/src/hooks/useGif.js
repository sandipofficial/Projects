import axios from "axios"
import { useEffect, useState } from "react"


const Randomurl = `https://api.giphy.com/v1/gifs/random?api_key=OwSx6u3q75xu6WE5y4GPRotOOYFBRbJc`
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const useGif = (tag) => {



  const [gif , setGif] = useState('')
  const [loading , setLoading] = useState(false)

  async function fetchData(tag){
    setLoading(true)

    const {data} = await axios.get(tag ? `${Randomurl}&tag=${tag}` : Randomurl)
    const imgSrc = data.data.images.downsized_large.url;
    setGif(imgSrc)
    setLoading(false)
    
  }

  useEffect( () => {
    fetchData('car')
  },[])

  return {gif, loading, fetchData}
};
export default useGif;
