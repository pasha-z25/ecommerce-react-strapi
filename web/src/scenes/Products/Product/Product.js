import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { slug } = useParams()
  return (
    <section>
      <h2>One Product</h2>
      <h3>{slug}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>Accusamus amet assumenda, beatae consequatur cupiditate dicta dolorum esse est id labore neque nostrum.</p>
      <p>Officia pariatur perspiciatis porro quam rem repellendus soluta?</p>
    </section>
  )
}

export { Product }