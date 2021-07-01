import React from 'react'
import { Menu } from './components/Menu'
import { Cart } from './components/Cart'
import { SelectLanguages } from './components/SelectLanguages'
import styles from './styles.module.scss'
import Logo from '~assets/icons/Webpack_and_React.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container mx-auto flex items-center justify-between'>
        <div className={styles.logo}>
          <img src={Logo} alt='Webpack_and_React' />
        </div>
        <nav className='flex-1 px-4'>
          <Menu />
        </nav>
        <Cart />
        <SelectLanguages />
      </div>
    </header>
  )
}

export { Header }
