import React from 'react'
import Nike from "../../images/Nike.jpg"
export const Header = () => {
  return (
    <header>
      <a href="#">
        <div className='logo'>
          <img src={Nike} alt=''/>
        </div>
      </a>
    </header>
  )
}


