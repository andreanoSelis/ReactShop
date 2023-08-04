import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import shoppingLogo from './Image/shop-logo.png'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'
function Login(){
    const history = useHistory();
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const loginUser = event =>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }
    const signupUser = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(userEmail, userPassword)
        .then((auth) => {
            history.push('/');
        })
        .catch(e => alert(e.message))
    }

    return(
        <div className="login">
            <Link>
                <img className="login_logo" src={shoppingLogo} alt="logo" />
            </Link>
            <div className="login_container">
                <h1>Welcome to ShopEaZy</h1>
                <h2>Sign In</h2>
                <form className="login_form">
                    <TextField value={userEmail} onChange={event => setUserEmail(event.target.value)} className="login_email" type="email" label="E-Mail" variant="outlined" />
                    <p></p>
                    <TextField value={userPassword} onChange={event => setUserPassword(event.target.value)} className="login_password" type="password" label="Password" variant="outlined" />
                    <p></p>
                    <Button onClick={loginUser} type="submit" variant="outlined" color="primary" className="login_signInButton">Sign In</Button>
                </form>
                <p>By Signing In You're Agree to ShopEaZy's Terms & Conditions.</p>
                <p>New to ShopEaZy?</p>
                <Button onClick={signupUser} variant="outlined" color="secondary">Create Your Account</Button>
            </div>
        </div>
    )
}
export default Login