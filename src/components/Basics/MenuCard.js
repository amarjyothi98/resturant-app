import React, { useState } from 'react'


const MenuCard = ( {practiceProps} ) => {
  console.log(practiceProps);

  return (
    <>

        <section className="main-card--container">


        {practiceProps.map((curElem)=> {

            return(
              <>
            <div className='card-container' key={curElem.id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">{ curElem.id }</span>
                <span className="card-author subtle" style={{color:"red"}}>{ curElem.name }</span>
                <h2 className="card-title">{ curElem.name }</h2>
                <span className="card-description subtle">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus pariatur saepe, facilis quo harum sit, accusamus aliquam ut in dicta, dolore consequuntur voluptatibus! In, molestias.
                </span>
                <div className="card-read">Read</div>
                <div>
                  <img src={ curElem.image } alt="image" className="card-media" />
      
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </div>
          </div>
          </>
          )
        })}
        </section>
    
    </>
  )
}

export default MenuCard