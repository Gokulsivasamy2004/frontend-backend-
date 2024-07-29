import React from 'react'
import ProductTransform from '../ProductTransform/ProductTransform'

function BathDecor({product}) {
  return (
    <div id='bathDecor' style={{padding:'10px 0 10px 0'}}>
    <div className='newArrival__titleContainer'>
        <h2>BathDecor</h2>
          <p>You Can’t Control The Wind, But You Can Adjust Your Sails</p>
    </div>
      <div style={{padding:'30px 0 0 0'}}>
           <ProductTransform  product={product}/>
      </div>
</div>
  )
}

export default BathDecor