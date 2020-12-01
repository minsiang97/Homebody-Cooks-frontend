import React, {useContext} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {toast } from 'react-toastify';
import '../Navbar/Navbar.css';
import LoggedInContext from "../../containers/LoggedInContext"


const WebNavbar = () => {
    const {isOpen, setOpen, isLogin, setIsLogin, isLoggedin, setIsLoggedin, setIsCart} = useContext(LoggedInContext)

    const LoginHandleClick = () => {
        setOpen(true)
        setIsLogin(true)
        setIsCart(false)
    }

    const SignupHandleClick = () => {
        setOpen(true)
        setIsLogin(false)
        setIsCart(false)
    }

    const LogOut = () => {
        localStorage.removeItem('token');
        setIsLoggedin(false);
        toast.success("You're logged out", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    return (
        <>
            <Navbar expand="lg" className = "navigation-bar" variant = "dark">
            <Navbar.Brand  href="/" className ="nav-title m-0">HomeBody Cooks</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {isLoggedin ?
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto align-items-center nav">
                    <Link className ="reactLink" to = "/recipes/show">Meals</Link>
                    <Link className ="reactLink" to = "/plans">Plans</Link>
                    <Link className ="reactLink" to = "/HowTo">How-To</Link>
                    <Link className ="reactLink"to = "/me">Profile</Link>
                    <Link><button onClick={LogOut}>Log out</button></Link>
                </Nav>
            </Navbar.Collapse>
                        :
            <Navbar.Collapse id="responsive-navbar-nav">            
                <Nav className="ml-auto align-items-center nav">
                    <Link className ="reactLink" to = "/recipes/show">Meals</Link>
                    <Link className ="reactLink" to = "/plans">Plans</Link>
                    <Link className ="reactLink" to = "/HowTo">How-To</Link>        
                    <Link><button onClick={LoginHandleClick}>Log In</button></Link>
                    <Link><button onClick={SignupHandleClick}>Sign Up</button></Link>
                </Nav>
                    
                
            </Navbar.Collapse>
            }
            </Navbar>

        </>
    )

};

export default WebNavbar;