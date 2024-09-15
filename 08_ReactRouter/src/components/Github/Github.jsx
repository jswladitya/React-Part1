import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    //method 2: Loader ka use karke api call
    const data = useLoaderData()

    //method 1: normal api call
    // const [data , setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/jswladitya')
    //     .then((response) => response.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data)
    //     }
    //     )
    // }, [])

  return (
    <div className=' flex justify-center items-center relative gap-2 text-center m-4 bg-white text-black p-4 text-3xl'>
      <img className='rounded-full' src={data.avatar_url} alt="Git Picture" width={50} />
      GitHub Followers : {data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/jswladitya')
    return response.json()
    // ab is loader se jo data ayega wo store ho jayega hook me aur cache bhi ho jayega
}
