import React from 'react';
import { Link } from 'react-router-dom';
import UseForms from '../Forms/UseForm';
import validate from '../Forms/Validate';
import "../styles/Login.css";

const Login = ({submitForm}) => {

    const {handleChange, handleSubmit, errors} = UseForms(submitForm,validate);

    return (
        <>
            <div className="login-container">
                <div>
                    <div className="login-left"> 
                            <img className="sticky" id="cover" src={cover} alt="cover" />
                            <div className='form-header'>
                            <h1> WELCOME TO HOTEL MASTER </h1>
                            <p>Good Resorts & Hosipitality</p>
                            </div>
                    
                    </div>

                    <div className="login-right">
                        <form className="form" onSubmit={handleSubmit}>
                            <h2>Login Here </h2>
                            <div className="form-inputs">
                                <label htmlFor="email" className="form-label"> Email: </label>
                                <input type="text" name="email" className="form-input" placeholder="Enter your Email" 
                                onChange={handleChange}
                                />
                                {errors.email && <p>{errors.email}</p>}
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="password" className="form-label"> Password: </label>
                                <input type="password" name="password" className="form-input" placeholder="Enter your Password"
                                onChange={handleChange}
                                />
                                {errors.password && <p>{errors.password}</p>}
                            </div>
                            <button type="submit" className="form-input-btn"> Login</button>
                            <div className="Message"> <Link className='next-page' to="/">  Forgot Password </Link></div>   
                        </form>    
                    </div>
                </div>

            </div>
            
        </>
    )
}

export default Login;