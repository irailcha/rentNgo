import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchCarImages } from '../../Api';
import { SwiperThumb, ImageStyle } from './SwiperSlider.style';
import { Loader } from '../helpers/Loader';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperSlider = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function getImages() {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await fetchCarImages();

        setImages(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, []);

  return (
    <div>
      {isLoading && !isError && <Loader />}
      <Swiper
        modules={[Virtual, Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        virtual
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {images.map((img, index) => (
          <SwiperThumb key={index}>
            <SwiperSlide virtualIndex={index}>
              <ImageStyle src={img} alt={`Car Image ${index}`} />
            </SwiperSlide>
          </SwiperThumb>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
