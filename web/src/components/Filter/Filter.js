import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from './components/Dropdown'

const Filter = ({ product }) => {
  console.log(product)
  return(
    <div className='relative'>
      <p>filter</p>
      <Dropdown />
    </div>
  )
}

Filter.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired
}

export { Filter }