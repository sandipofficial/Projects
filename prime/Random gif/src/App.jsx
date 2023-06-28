import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {

 

  return(
    <div className="w-full h-screen flex flex-col items-center  background  overflow-x-hidden">
      <h1 className=" bg-white w-[115rem] h-[4rem] rounded-xl flex items-center justify-center text-3xl font-bold mt-[40px]  ">
        <p className='uppercase'>Random GIFS</p>
      </h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-10">
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App