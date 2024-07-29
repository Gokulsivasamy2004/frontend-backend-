import React, { useEffect, useRef } from 'react'
import './buy.css'
import { Link } from 'react-router-dom'
function buy() {



  return (
        <div   className='buy'>
                <div class="card">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="card-inner">
        <h3>Order Placed </h3>
        <Link  className='buy__link' to='/'>Back To Home</Link>
  </div>
</div>


        </div>
  )
}

export default buy