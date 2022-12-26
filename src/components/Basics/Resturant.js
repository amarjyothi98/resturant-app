import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi.js'  
import MenuCard from './MenuCard'   


const Resturant = () => {

  const [MenuData, setMenuData] = useState(Menu); 
  console.log(MenuData );

  return (
    <>
    <nav className='navbar'>
      <div className="btn-group">
        <button className="btn-group__item">Breakfast</button>
        <button className="btn-group__item">Lunch</button>
        <button className="btn-group__item">Evening</button>
        <button className="btn-group__item">Dinner</button>
        <button className="btn-group__item">All</button>
      </div>
    </nav>
    <MenuCard practiceProps ={MenuData}/>
    </>
  )
}

export default Resturant