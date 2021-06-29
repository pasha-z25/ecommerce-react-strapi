import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import ReactMarkdown from 'react-markdown'
import { ImageSlider } from './components/ImageSlider'

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
        <>
          {/* product.photo.map((photo) => {
            return (
              <img key={photo.hash} src={`${process.env.API_HOST}${photo.formats.large?.url}`}
                   alt={photo.alternativeText} title={photo.caption} />
            )
          }) */}
          <div className='slider-wrapper relative' style={{ paddingTop: '60%'}}>
              <ImageSlider images={product.photo} />
          </div>
          <h1>{product.title}</h1>
          <p className='text-right'>
              <Link to={`/${process.env.CATEGORIES_SLUG}/${product.category.slug}`}>{product.category.title}</Link>
          </p>
          <div><ReactMarkdown>{product.description}</ReactMarkdown></div>

        </>
      )}
    </section>
  )
}

export { Product }