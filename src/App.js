import React from 'react'
import Main from './component/Main';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {FullPage} from './component/FullPage'
import {Navbar} from './component/Navbar'
import Footer from './component/Footer';
const App = () => {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Route path="/" exact component={FullPage} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App
