import React from 'react'
import Main from './component/Main';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {FullPage} from './component/FullPage'
import {Navbar} from './component/Navbar'
import Footer from './component/Footer';
import Category from './component/Category'
const App = () => {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Route path="/products" component={FullPage} />
            <Route path="/" exact component={Category} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App
