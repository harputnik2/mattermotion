import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import styles from './App.module.scss'

import Header from './components/header'
import Footer from './components/footer'

import Home from './pages/home'
import Collection from './pages/collection'
import Artpiece from './pages/artpiece'

import { categories, rootpath } from 'consts'

const client = new ApolloClient({
  uri: `${rootpath}/graphql`,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <Router basename={'/mm'}>
      <ApolloProvider client={client}>
        <div className={styles.app}>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/animations'>
              <Collection category={categories.ANIMATIONS} />
            </Route>
            <Route exact path='/virtual-tours'>
              <Collection category={categories.VIRTUAL_TOURS} />
            </Route>
            <Route exact path='/visualizations'>
              <Collection category={categories.VISUALIZATIONS} />
            </Route>
            <Route path='/animations/:id'>
              <Artpiece category={categories.ANIMATIONS} />
            </Route>
            <Route path='/virtual-tours/:id'>
              <Artpiece category={categories.VIRTUAL_TOURS} />
            </Route>
            <Route path='/visualizations/:id'>
              <Artpiece category={categories.VISUALIZATIONS} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </ApolloProvider>
    </Router>
  )
}

export default App
