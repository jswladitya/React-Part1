import React from 'react'


function Weather() {
  return (
    <div className='weather place-self-center p-40 rounded-md bg-blue-700 flex flex-col items-center'>
      <div className='search-bar  '>
        <input type="text" placeholder='search' />
        <img src="" alt="" />
        {/* paste search img here */}
      </div>
    </div>
  )
}

export default Weather
