import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Visualization from './pages/Visualization'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="App">
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
    </Router>
  );
}

export default App;
