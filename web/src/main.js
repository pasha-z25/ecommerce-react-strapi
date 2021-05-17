import React from 'react'
import ReactDom from 'react-dom'
import { ApolloProvider } from '@apollo/client/react' // eslint-disable-line import/no-extraneous-dependencies
import App from './App'
import client from "./api/apollo";

import './style.css'

ReactDom.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.querySelector('#app'))