import React from 'react'
import search_icon from '../Weather/assets/search.png'

function Weather() {
  return (
    <div className='weather'>
      <div className='search-bar '>
        <input type="text" placeholder='search' />
        <img src={search_icon} alt="" />
      </div>
    </div>
  )
}

export default Weather
