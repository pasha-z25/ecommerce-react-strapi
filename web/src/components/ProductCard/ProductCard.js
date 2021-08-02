import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ImageSlider } from './components/ImageSlider'
import { text } from '~modules/i18n'
import { shopCart } from '~store'
import imageAddToCart from '~assets/icons/add-to-cart.png'

const ProductCard = ({ product }) => {
  const addToCart = (item) => {
    shopCart.addProduct(item)
  }
  return(
    <div className='relative'>
      <div className='relative slider-wrapper' style={{ paddingTop: '60%', marginTop: '15px', marginBottom: '15px'}}>
        <ImageSlider images={product.photo} />
      </div>
      <h3>{ product.title }</h3>
      <p>{ product.introText }</p>
      <p>${ product.price }</p>
      <p>
        <Link to={`/${process.env.CATEGORIES_SLUG}/${product.category.slug}`}>{product.category.title}</Link>
      </p>
      <p>
        <button type='button' onClick={() => addToCart(product)}>
          <img src={imageAddToCart} alt='add to cart icon' style={{maxWidth: '35px'}} className='mr-3' />
          { text('btnAddToCart') }
        </button>
      </p>
      <p>
        <Link to={`/${process.env.PRODUCTS_SLUG}/${product.slug}/${product.id}`}>{ text('btnDetails') }</Link>
      </p>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired
}

export { ProductCard }