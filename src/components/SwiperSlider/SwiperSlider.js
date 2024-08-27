import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, A11y, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperThumb, ImageStyle } from './SwiperSlider.style';
import { Loader } from '../helpers/Loader';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import advertsData from '../../adverts.js';

const SwiperSlider = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const imgArray = advertsData.map(advert => advert.img);
    
    if (imgArray.length === 0) {
      setError('No images found');
    } else {
      setImages(imgArray);
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {images.length === 0 ? (
        <Loader />
      ) : (
        <Swiper
          modules={[Virtual, Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          virtual
          navigation
          pagination={{ clickable: true }}
          
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <SwiperThumb>
                <ImageStyle src={img} alt={`Car Image ${index}`} />
              </SwiperThumb>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default SwiperSlider;