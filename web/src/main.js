import React from 'react'
import ReactDom from 'react-dom'
import { ApolloProvider } from '@apollo/client/react' // eslint-disable-line
import App from './App'
import client from './api/apollo'

import './style.css'
// import '~styles'
// import './styles/index.scss'
// import './scenes/Header/styles.module.scss'

ReactDom.render((
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  ), document.querySelector('#app')
)