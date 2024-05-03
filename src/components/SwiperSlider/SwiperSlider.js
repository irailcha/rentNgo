import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchCarImages } from '../../redux/Ads/operations.js';
import { SwiperThumb, ImageStyle } from './SwiperSlider.style';
import { Loader } from '../helpers/Loader';
import {
  selectIsError,
  selectCarImages,
  selectIsLoading,
} from '../../redux/Ads/selectors.js';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperSlider = () => {
  const dispatch = useDispatch();
  const images = useSelector(selectCarImages);
  const error = useSelector(selectIsError);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCarImages());
  }, [dispatch]);

  return (
    <div>
      {loading && !error && <Loader />}
      <Swiper
        modules={[Virtual, Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        virtual
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {images &&
          Array.isArray(images) &&
          images.map((img, index) => (
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
