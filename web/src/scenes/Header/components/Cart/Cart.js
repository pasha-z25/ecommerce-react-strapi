import React from 'react'
import { shopCart } from '~store'

import imageShoppingCart from '~assets/icons/shopping-cart-emoji.png'

const Cart = () => {

  return (
    <div className='px-4'>
      <img src={imageShoppingCart} alt='add to cart icon' style={{maxWidth: '50px'}} className='mr-3' />
      <span>{shopCart.getLength}</span>
    </div>
  )
}

export { Cart }