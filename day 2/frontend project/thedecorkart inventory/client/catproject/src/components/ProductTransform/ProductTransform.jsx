import React from 'react'
import './productTransform.css'
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/controller'
import { useGlobalContext } from '../../context/Context';
import { ADD_TO_Basket } from '../../reducer/Action';

function ProductTransform({product}) {

  const {dispatch} = useGlobalContext()

  const addToBasket = (_id,category,name,img,prise)=>{
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




  return (
    <div className='productTransform'>
            <Swiper

    modules={[Navigation, Pagination, Scrollbar, A11y,Controller]}
    spaceBetween={10}
    slidesPerView={5}
    navigation
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    {product.map(({img,name,category,_id,prise})=><SwiperSlide  className='productTransform__container'>
                    <div className='productTransform__name'>
                          <h4>{name}</h4>
                    </div>
                     <img src={img} alt={name}/>
                      <div>
                          <button onClick={()=>addToBasket(_id,category,name,img,prise)}>Add</button>
                      </div>
    </SwiperSlide>)}
  </Swiper>
    </div>
  )
}

export default ProductTransform