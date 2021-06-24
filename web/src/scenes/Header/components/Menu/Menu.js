import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const Menu = () => {
  return(
    <ul className={styles.menu}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/products'>Products</Link>
      </li>
      <li>
        <Link to='/about'>About Us</Link>
      </li>
    </ul>
  )
}

export { Menu }
