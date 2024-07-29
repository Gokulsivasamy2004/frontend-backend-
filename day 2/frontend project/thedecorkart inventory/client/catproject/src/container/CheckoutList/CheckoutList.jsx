import React, { useMemo } from 'react'
import './checkoutList.css'
import {Remove_TO_Basket} from '../../reducer/Action'
import { useGlobalContext } from '../../context/Context'
import { useNavigate } from 'react-router-dom'
function CheckoutList() {

  const {basket,name,id,dispatch} = useGlobalContext()
 const navigate = useNavigate()
  console.log(basket)
const removeButton = (id)=>{
  let data = basket.filter((item)=>item._id !== id)
  console.log(data)
  dispatch({type:Remove_TO_Basket,data})


}


  const totalPrise =  basket.reduce((amount,item)=>item.prise + amount,0)
console.log(totalPrise)
  return (
    <div className='checkout'>
      <div className='total'>
          <h3>Total Prise: {totalPrise}</h3>
      </div>
      {basket?.map((data)=>{  
        console.log(data.img)
        return(
          <div className='checkout-list' key={data._id}>
              <div className='checkout-list__image'>
                  <img src={data.img} alt={data.name}/>
              </div>
              <div className='line'/>
              <div className='checkout-detail'>
                  <h3>{data.name}</h3>
                  <h4>Product Prise: {data.prise}</h4>
                  <div onClick={()=>removeButton(data._id)} class="button-borders">
                        <button class="primary-button"> REMOVE
                        </button>
                  </div>
                 
              </div>
              
          </div>
        )
      })}
       <div className='total'>
          <h3>Total Prise: ${totalPrise}</h3>
          <div>
          <button onClick={()=>{
              navigate('/buy')
              dispatch({type:'BUY'})

          }} class="button">
              Buy
        </button>
          </div>
      </div>
    </div>
  )
}

export default CheckoutList