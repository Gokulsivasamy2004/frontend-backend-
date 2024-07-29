import React from 'react'
import './transform.css'
import  ImageOne from '../../assets/NEW-DESKTOPA_ba3c35d1-5462-40d2-bca2-a3ab294edbf2.webp'
import ImageTwo from '../../assets/NEW-DESKTOPC_7e10e41b-ce1f-464a-bad2-eb37741f0f48.webp'
import ImageThree from '../../assets/NEW-DESKTOPdddddd_d58997e0-f00c-4aad-9ca2-fdbfb69f6e93.webp'
import ImageFour from '../../assets/NEW-DESKTOPF.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Transform() {
    const params = {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      };

  return (
        <div >
                <Swiper className='transform'
                        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                        // spaceBetween={50}
                        // slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        {...params}
    
                 >
                <SwiperSlide>
                        <img src={ImageOne} alt="transform" />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={ImageTwo} alt="transform" />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={ImageThree} alt="transform" />
                </SwiperSlide>
                <SwiperSlide>
                        <img src={ImageFour} alt="transform" />
                </SwiperSlide>
    </Swiper>
        </div>
  )
}

export default Transform