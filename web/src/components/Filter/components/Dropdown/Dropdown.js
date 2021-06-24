import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({ product }) => {
  console.log(product)
  return(
    <div className='relative'>
      <p>dropdown</p>
    </div>
  )
}

Dropdown.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired
}

export { Dropdown }