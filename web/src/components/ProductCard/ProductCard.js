import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ImageSlider } from './components/ImageSlider'

const ProductCard = ({ product }) => {
  return(
    <div className='relative'>
      <div className='relative slider-wrapper' style={{ paddingTop: '60%', marginTop: '15px', marginBottom: '15px'}}>
        <ImageSlider images={product.photo} />
      </div>
      <h3>{ product.title }</h3>
      <p>{ product.introText }</p>
      <p>${ product.price }</p>
      <p>
        <Link to={`${process.env.PRODUCTS_SLUG}/${product.category.slug}`}>{product.category.title}</Link>
      </p>
      <p>
        <Link to={`${process.env.PRODUCTS_SLUG}/${product.slug}?id=${product.id}`}>Details</Link>
      </p>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired
}

export { ProductCard }