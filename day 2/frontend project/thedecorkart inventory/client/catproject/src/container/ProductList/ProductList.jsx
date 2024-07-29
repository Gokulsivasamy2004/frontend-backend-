import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './productList.css'
import Product from '../../Components/Product.jsx/Product'
import { useGlobalContext } from '../../context/Context'
import {data} from '../../data'
function ProductList() {
const [datas,setData] = useState(data)
const [product,setProduct] = useState('')
const {basket} = useGlobalContext()


// useEffect(()=>{
//   axios.get('https://busy-tan-tuna-cape.cyclic.app/api/p1/products/list')
//   .then((res)=>{
//     console.log(res.data.product);
//     setData(res.data.product)
//   })
//   .catch((err)=>console.log(err))
// },[basket])


const handleChange = (e)=>{
  const letter = e.target.value
  setProduct(letter)

}


  return (
   <>
    <div>
    <input onChange={
      handleChange
      
    } className='input' type='text' placeholder='Enter Product Name' value={product}/>
    </div>
     <div className='productList'>
     
     {
     datas.filter((item)=>{
        return product.toLowerCase() === ''?item:item.name.toLowerCase().includes(product)
     }).map((product)=>{
        return <Product key={product._id} {...product}/>
      })
     }
  </div>
   
   </>
  )
}

export default ProductList