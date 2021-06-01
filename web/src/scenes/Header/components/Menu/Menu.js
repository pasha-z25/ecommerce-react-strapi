import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const Menu = () => {
  return(
    <ul className={styles.menu}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li className='pattaya'>
        <Link to='/products'>Products</Link>
      </li>
    </ul>
  )
}

export { Menu }
