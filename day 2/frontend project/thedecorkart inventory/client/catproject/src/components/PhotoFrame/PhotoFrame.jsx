import React from 'react'
import ProductTransform from '../ProductTransform/ProductTransform'

function PhotoFrame({product}) {
  return (
    <div id='photoFrame' style={{padding:'10px 0 10px 0'}}>
    <div className='newArrival__titleContainer'>
        <h2>PhotoFrame</h2>
          <p>The best thing about memories is making them</p>
    </div>
      <div style={{padding:'30px 0 0 0'}}>
           <ProductTransform  product={product}/>

      </div>
</div>
  )
}

export default PhotoFrame