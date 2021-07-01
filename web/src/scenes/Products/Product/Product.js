import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import ReactMarkdown from 'react-markdown'
import { ImageSlider } from './components/ImageSlider'
import { text } from '~modules/i18n'

import styles from './styles.module.scss'

const Product = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(gql`
      query Product {
          product(id:"${id}") {
              id
              title
              introText
              description
              officialPage
              category {
                  id
                  slug
                  title
                  description
                  photo {
                      id
                      name
                      alternativeText
                      caption
                      width
                      height
                      formats
                      hash
                      ext
                      mime
                  }
              }
              inStock
              price
              photo {
                  id
                  name
                  alternativeText
                  caption
                  width
                  height
                  formats
                  hash
                  ext
                  mime
              }
          }
      }
  `)
  const product = data?.product

  return (
    <section>
      {loading && <div>Loading...</div>}
      {error && <div>{`Error! ${error.message}`}</div>}
      {product && (
        <div className={`${styles.productWrapper} product-wrapper`}>
          <div className={`${styles.sliderWrapper} slider-wrapper relative`}>
              <ImageSlider images={product.photo} />
          </div>
          <div className={`${styles.productInfo} product-info`}>
              <h1>{product.title}</h1>
              <p>${product.price} ({product.inStock ? text('textInStock') : text('textUnderTheOrder')})</p>
              <p>
                  <Link to={`/${process.env.CATEGORIES_SLUG}/${product.category.slug}`}>{product.category.title}</Link>
              </p>
              <p>
                  <a href={product.officialPage} target='_blank' rel='noopener noreferrer'>{ text('textOfficialPage') }</a>
              </p>
          </div>
          <div className={`${styles.productDescription} product-description`}>
              <ReactMarkdown>{product.description}</ReactMarkdown>
          </div>
        </div>
      )}
    </section>
  )
}

export { Product }