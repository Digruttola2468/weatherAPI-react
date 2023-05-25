import "./forecast.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from 'swiper';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from "react";

function Forecast({ forecast }) {
  
  const listForecast = [...forecast];

  return (
    <section className="section-timezone">
      <h2>Next Forecast</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={5}
        slidesPerView={3}
        pagination  
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        
        {
          listForecast.map(element => {
            return (<SwiperSlide>
              <div className="forecast-item">
                <p>{element.main.temp}°</p>
                <img
                  src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
                  alt="icon Weather"
                />
                <p>{element.dt_txt}</p>
              </div>
            </SwiperSlide>);
          })
        }
        
      </Swiper>
    </section>
  );
}

export default Forecast;
