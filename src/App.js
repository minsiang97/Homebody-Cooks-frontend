import React, {useState} from 'react'
import {Switch, Link, Route} from 'react-router-dom';
import './App.css';
import WebNavbar from './components/Navbar/Navbar';
import LoggedInContext from '../src/containers/LoggedInContext';
import Modal from './components/Modal/Modal';
import {toast, ToastContainer} from 'react-toastify';
import Button from 'react-bootstrap/Button' 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './pages/Homepage/Hompage'
import Recipes from './pages/Recipes/Recipes';
import Ingredients from './pages/Ingredients/Ingredients';
import Cart from './components/Cart/Cart'

function App() {
  const [isOpen, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isCart, setIsCart] = useState(false)
  const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem('token'))

  return (
    <>
    <LoggedInContext.Provider value = {{isOpen, setOpen, isLogin, setIsLogin, isLoggedin, setIsLoggedin, isCart, setIsCart}}>
    <WebNavbar/>
    {isOpen ? <Modal /> : null}
    <ToastContainer/>
    <Switch>
      <Route exact path="/"><Homepage/></Route>
      <Route path="/recipes/show"><Recipes/></Route>
      <Route path="/recipes/:id/ingredients"><Ingredients/></Route>
    </Switch>
    <Cart/>
    </LoggedInContext.Provider>
    
    </>
    );
    
}

export default App;
