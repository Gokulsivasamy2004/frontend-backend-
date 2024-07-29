import React from 'react'
import ProductTransform from '../ProductTransform/ProductTransform'

function Furniture({product}) {
  return (
    <div id='furniture' style={{padding:'10px 0 10px 0'}}>
    <div className='newArrival__titleContainer'>
        <h2>Furniture</h2>
          <p>Every great design begins with an even better story</p>
    </div>
      <div style={{padding:'30px 0 0 0'}}>
           <ProductTransform  product={product}/>
      </div>
</div>
  )
}

export default Furniture