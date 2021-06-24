import React from 'react'
import { hot } from 'react-hot-loader/root'
import { useQuery, gql } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './scenes/Header'
import { Home } from './scenes/HomePage'
import { Products } from './scenes/Products'
import { AboutUs } from './scenes/AboutUs'
import { products } from './store'

import 'tailwindcss/base.css'
import 'tailwindcss/utilities.css'
import 'tailwindcss/components.css'
import './styles/index.scss'

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

  if (data) {
    console.log(data.products)
    console.log(data.categories)
    products.setValue(data.products)
  }


  return (
    <div>
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
        </Switch>
      </Router>
    </div>
  )
}

export default hot(App)
