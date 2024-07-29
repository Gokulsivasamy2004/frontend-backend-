import React from 'react'
import ProductTransform from '../ProductTransform/ProductTransform'

function Lightling({product}) {
  return (
    <div id='lighting' style={{padding:'10px 0 10px 0'}}>
    <div className='newArrival__titleContainer'>
        <h2>Lighting</h2>
          <p>There is a crack in everything, that's how the light gets in</p>
    </div>
      <div style={{padding:'30px 0 0 0'}}>
           <ProductTransform  product={product}/>
      </div>
</div>
  )
}

export default Lightling