import React from 'react'
import PropTypes from 'prop-types'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.scss'

SwiperCore.use([Pagination])
const ImageSlider = ({ images }) => {
  console.log(images)

  return(
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination
    >
      {images.map((image) => {
        return(
          <SwiperSlide key={image.id}>
            <img src={`${process.env.API_HOST}${image.url}`} alt={image.alternativeText} title={image.caption} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired
}

export { ImageSlider }