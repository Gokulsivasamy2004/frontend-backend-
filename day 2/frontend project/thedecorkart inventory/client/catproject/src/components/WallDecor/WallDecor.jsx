import React from 'react'
import ProductTransform from '../ProductTransform/ProductTransform'

function WallDecor({product}) {
  return (
    <div id='wallDecor' style={{padding:'10px 0 10px 0'}}>
    <div className='newArrival__titleContainer'>
        <h2>WallDecor</h2>
          <p>Family is the heart of a home</p>
    </div>
      <div style={{padding:'30px 0 0 0'}}>
           <ProductTransform  product={product}/>
      </div>
</div>
  )
}

export default WallDecor