import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg';
import image6 from '../../images/6.jpg';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider ()
{
  return (
    <>
      <Swiper navigation={ true } modules={ [ Navigation ] }
        className="mySwiper position-relative z-0 my-10">
        <SwiperSlide className='flex justify-center'>
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center'>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center'>
          <img src={image3} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center'>
          <img src={image4} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center'>
          <img src={image5} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center'>
          <img src={image6} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
