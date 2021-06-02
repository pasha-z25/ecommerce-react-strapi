import React from 'react'
import { hot } from 'react-hot-loader/root'
import { useQuery, gql } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './scenes/Header'
import { Home } from './scenes/HomePage'
import { Products } from './scenes/Products'
import { products } from './store'

// import './styles/style.css'
import './styles/index.scss'

const App = () => {
  const { loading, error, data } = useQuery(gql`
    query Categories {
      categories {
        id
        Title
        created_at
        updated_at
        published_at
      }
      products {
        id
        created_at
        Title
        Slug
        category {
          id
        }
        Description
        Price
        InStock
        OfficialPage
        Photo {
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
    // console.log(data.products)
    // console.log(data.categories)
    // const { categories, products } = data

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
        </Switch>
      </Router>
    </div>
  )
}

export default hot(App)
