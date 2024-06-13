import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchCarImages } from '../../redux/Ads/operations';
import { SwiperThumb, ImageStyle } from './SwiperSlider.style';
import { Loader } from '../helpers/Loader';
import {
  selectError,
  selectCarImages,
  selectIsLoading,
} from '../../redux/Ads/selectors';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperSlider = () => {
  const dispatch = useDispatch();
  const images = useSelector(selectCarImages);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCarImages());
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error && <Loader />}
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
