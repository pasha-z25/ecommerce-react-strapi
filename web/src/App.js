import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Header } from './scenes/Header'

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
    }
  `);
  console.log(data)

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{`Error! ${error.message}`}</div>}
      <span>Hello world!</span>
      <Header />
      <hr/>
    </div>
  )
}

export default App
