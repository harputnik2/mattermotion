import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import styles from './App.module.scss'

import Home from './pages/home'
import Visualization from './pages/visualization'
import Header from './components/header'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className={styles.app}>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/visualizations/:id'>
              <Visualization />
            </Route>
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  )
}

export default App
