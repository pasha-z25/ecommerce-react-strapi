import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import FsLightbox from 'fslightbox-react'

// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/components/pagination/pagination.scss'

SwiperCore.use([Pagination])

const ImageSlider = ({ images }) => {
  console.log(images)

  const [toggler, setToggler] = useState(false)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return(
    <>
      {/*
      <Slider {...settings}>
        {images.map((image) => {
          return(
            <div key={image.id} style={{
              position: 'relative',
              paddingTop: '60%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: `url(${process.env.API_HOST}${image.url})`
            }} />
          )
        })}
      </Slider>

      */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination
        // onSwiper={(swiper) => swiper.update()}
        onSwiper={(swiper) => swiper.updateSize()}
      >
        {images.map((image) => {
          return(
            <SwiperSlide key={image.id} style={{
              position: 'relative',
              paddingTop: '60%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundImage: `url(${process.env.API_HOST}${image.url})`
            }}>
              <img src='' alt='zoom' onClick={() => setToggler(!toggler)}/>
            </SwiperSlide>
          )
        })}
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        {/* <SwiperSlide>Slide 2</SwiperSlide> */}
        {/* <SwiperSlide>Slide 3</SwiperSlide> */}
        {/* <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
      <FsLightbox
        toggler={toggler}
        sources={
          images.map(image => `${process.env.API_HOST}${image.url}`)
        }
      />
    </>
  )
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired
}

export { ImageSlider }