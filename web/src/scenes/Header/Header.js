import React from 'react'
import { Menu } from './components/Menu'
import styles from './styles.module.scss'
import Logo from '~assets/icons/Webpack_and_React.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <div className={styles.logo}>
          <img src={Logo} alt='Webpack_and_React' />
        </div>
        <nav>
          <Menu />
        </nav>
      </div>
    </header>
  )
}

export { Header }
