import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/gallery' component={Gallery} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </>
  )
}

export default App

