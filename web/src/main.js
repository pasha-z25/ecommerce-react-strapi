import React from 'react'
import ReactDom from 'react-dom'
import { ApolloProvider } from '@apollo/client/react' // eslint-disable-line
import App from './App'
import client from './api/apollo'

ReactDom.render((
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  ), document.querySelector('#app')
)