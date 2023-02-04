import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Header from './components/Header'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
    <div className="app-container">
      <div className="app-inner-container">
        <Header />
        <div className="list-center">
          <Switch>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
)

export default App
