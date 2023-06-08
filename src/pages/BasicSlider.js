
import React from 'react';
import ReactDOM from 'react-dom';
import { colors } from "@material-ui/core";
import BasicSlider from "./BasicSlider";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
const App=()=>{
return(


<div className="container" style={{ width: "100%", height: "100%",  }}>
      <h1 className="heading" style={{color: "#ecece9"}} >Check out some of our projects</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 2,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="assets/images/one.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/images/two.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/images/three.jpg" alt="slide_image" />
        </SwiperSlide>
        

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>






)
}

  
  export default App;