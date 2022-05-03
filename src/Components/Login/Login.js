import { Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Login.css';


const Login = () => {
    const [loginData, setLoginData] = useState({});



    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field)
        const newLoginData = { ...loginData };

        newLoginData[field] = value;

        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, navigate);
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    return (
        <div className='mt-5 ' style={{ marginTop: '100px' }}>



            <div className='login-form-container'>
                <NavLink to="/home">
                <span  id="close-login-form" className="fas fa-times"></span>
                </NavLink>
            
                <form onSubmit={handleLoginSubmit}>

                    <h3>user login</h3>
                    <input onChange={handleOnChange} name="email" type="email" placeholder="email" className="box" />
                    <input onChange={handleOnChange} name="password" type="password" placeholder="password" className="box" />
                    {/* <p> forget your password <NavLink href="#">click here</NavLink> </p> */}
                    <input type="submit" value="login" className="btn" />




                    
                    <p>or login with</p>
                    <div className="buttons">
                        <button 
                         onClick={handleGoogleSignIn}
                        
                        href="#" className="btn"> google </button>
                        <button href="#" className="btn"> facebook </button>
                    </div>
                    
                    <p> don't have an account <NavLink to="/register"  href="#">create one</NavLink> </p>

                    {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}


                </form>
            </div>
        </div>
    );
};

export default Login;