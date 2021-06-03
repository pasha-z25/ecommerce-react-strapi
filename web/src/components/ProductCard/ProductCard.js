import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { ImageSlider } from './components/ImageSlider'

const ProductCard = ({ product }) => {
  console.log(product)

  return(
    <div className='relative'>
      <ImageSlider images={product.photo} />
      <p>{ product.title }</p>
      <div>
        <ReactMarkdown>{ product.description }</ReactMarkdown>
      </div>
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