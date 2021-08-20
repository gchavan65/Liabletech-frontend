import React from 'react';
import Home from './componets/Home';
import {Switch,Route, Redirect} from 'react-router-dom';
import Contact from './componets/Contact';
import Service from './componets/Service';
import About from './componets/About';
import Navbar from './componets/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.scss'
import Footer from './componets/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path='/' component={Home}/>
        <Route exact path='/About' component={About}/> 
        <Route exact path='/Service' component={Service}/> 
        <Route exact path='/Contact' component={Contact} />
        <Redirect to='/'/>
      </Switch>
      <Footer/>
    </>
  )
}

export default App
