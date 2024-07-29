import React from 'react'
import './product.css'
import { ADD_TO_Basket } from '../../reducer/Action'
import { useGlobalContext } from '../../context/Context'



function Product({img,category,name,prise,_id}) {
  const {dispatch} = useGlobalContext()
  
  const addToBasket = ()=>{
    const item ={
     _id,
     category,
     img,
     name,
     prise
    }
    console.log(item)
     dispatch({type:ADD_TO_Basket,item})
 }
 console.log(img)
  return (
    <div className='product'>
        <div className='product__img'>
            <img src={img} alt={name}/>
        </div>
        <div className='product__detail'>
            <h4>{name}</h4>
            <p> Product Prise: $ {prise}</p>
        </div>
        <button type='button' className='btn' onClick={addToBasket}>Add Cart</button>
    </div>
  )
}

export default Product