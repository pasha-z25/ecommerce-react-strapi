import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { useQuery, gql } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './scenes/Header'
import { Home } from './scenes/HomePage'
import { Products } from './scenes/Products'
import { AboutUs } from './scenes/AboutUs'
import { Cart } from './scenes/Cart'
import { products } from './store'
import { availableLanguages } from '~utils/constants'
import LangContext from './context'

import './styles/index.scss'

const defaultLang = availableLanguages[0]
const browserLang = navigator.language
const shortLang = browserLang.substring(0, 2).toLowerCase()
const lang = availableLanguages.findIndex(l => l === shortLang) ? shortLang : defaultLang

const App = () => {
  const { loading, error, data } = useQuery(gql`
    query Categories {
      categories {
        id
        title
        slug  
        description  
        photo {
            id
            name
            url
            caption
            alternativeText
        }
      }
      products {
        id
        created_at
        title
        slug
        category {
          id
          title
          slug
          description
          photo {
              id
              name
              url
              caption
              alternativeText
          }
        }
        introText
        description
        price
        inStock
        officialPage
        photo {
          id
          name
          url
          caption
          alternativeText
        }
      }
    }
  `)

  const [language, setLanguage] = useState(lang)

  if (data) {
    products.setValue(data.products)
  }

  return (
    <LangContext.Provider value={[language, setLanguage]}>
      {loading && <div>Loading...</div>}
      {error && <div>{`Error! ${error.message}`}</div>}
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/about'>
            <AboutUs />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </Router>
    </LangContext.Provider>
  )
}

export default hot(App)
