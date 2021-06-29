import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FsLightbox from 'fslightbox-react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss' // eslint-disable-line import/no-extraneous-dependencies
import styles from './styles.module.scss'
import imageZoomIcon from '~assets/icons/zoom+.png'

SwiperCore.use([Pagination])

const ImageSlider = ({ images }) => {
  const [toggler, setToggler] = useState(false)

  return(
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination
        // onSwiper={(swiper) => swiper.update()}
        // onSwiper={(swiper) => swiper.updateSize()}
      >
        {images.map((image) => {
          return(
            <SwiperSlide key={image.id} className='relative' style={{
              position: 'relative',
              paddingTop: '60%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundImage: `url(${process.env.API_HOST}${image.formats.large?.url})`
            }} />
          )
        })}
      </Swiper>
      <button type='button' className={styles.button} onClick={() => setToggler(!toggler)}>
        <img src={imageZoomIcon} alt='zoom' className={`${styles.zoomIcon} zoom-icon`}/>
      </button>
      <FsLightbox
        toggler={toggler}
        sources={
          images.map(image => `${process.env.API_HOST}${image.formats.large?.url}`)
        }
      />
    </>
  )
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired
}

export { ImageSlider }