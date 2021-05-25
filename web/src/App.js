import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './scenes/Header'
import { Home } from './scenes/HomePage'
import { Products } from './scenes/Products'

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
    const { categories, products } = data
    console.log(categories)
    console.log(products)
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

export default App
