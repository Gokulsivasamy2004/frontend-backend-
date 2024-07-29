import React, { useEffect, useRef, useState } from 'react'
import { Transform,NewArrival, Lightling, WallDecor, BathDecor, Furniture, PhotoFrame, Loading } from '../../components'
import { data } from '../../data'
import discount from '../../assets/1Hello_-Discounts.webp'
import './home.css'

function Home() {
const [product,setProduct] = useState(data) 


// if(true){
//   return <Loading/>
// }

  return (
    <div >
            <Transform/>
            <NewArrival   product={product.length > 10 ? product.slice(0,7):product} /> 
            <div id='discount' className='discount__img'>
                <img src={discount} alt='discount'/>
            </div>
            <Lightling product={product}/>
            <WallDecor product={product}/>
            <BathDecor product={product}/>
            <Furniture product={product}/>
            <PhotoFrame product={product}/>
    </div>
  )
}

export default Home