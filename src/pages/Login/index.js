import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Link } from "react-router-dom";

function Login(){
    return(
        <AuthLayout>
            
            <div className="text-center mb-5">
        <img src="assets_admin/images/logo.png" height="48" className='mb-4'/>
        <h3>Sign In</h3>
        <p>Please sign in to continue to HMS.</p>
    </div>
    <form action="index.html">
        <div className="form-group position-relative has-icon-left">
            <label htmlFor="email">Email</label>
            <div className="position-relative">
                <input type="email" className="form-control" id="email" name="email"/>
                <div className="form-control-icon">
                    <i data-feather="user"></i>
                </div>
            </div>
        </div>
        <div className="form-group position-relative has-icon-left">
            <div className="clearfix">
                <label htmlFor="password">Password</label>
                <a href="auth-forgot-password.html" className='float-right'>
                    <small>Forgot password?</small>
                </a>
            </div>
            <div className="position-relative">
                <input type="text" className="form-control" id="password"/>
                <div className="form-control-icon">
                    <i data-feather="lock"></i>
                </div>
            </div>
        </div>

        <div className='form-check clearfix my-4'>
           
            <div className="float-right">
                <Link to="/register">Don't have an account?</Link> 
            </div>
        </div>
        <div className="clearfix">
            <button className="btn btn-primary float-right">Submit</button>
        </div>
    </form>
  
        </AuthLayout>
    )
}
export default Login ;