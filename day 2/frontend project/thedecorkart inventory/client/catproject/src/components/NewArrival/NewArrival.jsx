import React from 'react'
import './newArrival.css'
import ProductTransform from '../ProductTransform/ProductTransform'


function NewArrival({product}) {
 
  return (
    <div id='newArrival' style={{padding:'10px 0 10px 0'}}>
        <div className='newArrival__titleContainer'>
            <h2>November Spotlight</h2>
              <p>Our latest additions to effortlessly elevate your home</p>
        </div>
          <div style={{padding:'30px 0 0 0'}}>
               <ProductTransform  product={product}/>
          </div>
    </div>
  )
}

export default NewArrival