import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import { Product } from './Product'
import { products } from '~store'
import { ProductCard } from '~components/ProductCard'

const Products = () => {
  const { path, url } = useRouteMatch()
  return (
    <section className='container mx-auto'>
      <Switch>
        <Route exact path={path}>
          <h2>Products</h2>
          <p>{path}</p>
          <ul>
            <li>
              <Link to={`${url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
              <Link to={`${url}/components`}>Components</Link>
            </li>
            <li>
              <Link to={`${url}/props-v-state`}>Props v. State</Link>
            </li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet assumenda, beatae consequatur
            cupiditate dicta dolorum esse est id labore neque nostrum officia pariatur perspiciatis porro quam rem
            repellendus soluta?</p>
          <br/>
          <hr/>
          <div style={{
            display: 'grid',
            gap: '30px',
            gridTemplateColumns: 'repeat(3, 1fr)'
          }}>
            {products.getProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />
            })}
          </div>

        </Route>
        <Route path={`${path}/:slug`} component={Product} />
      </Switch>
    </section>
  )
}

export { Products }