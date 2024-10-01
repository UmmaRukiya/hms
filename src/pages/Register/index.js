import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <AuthLayout>
       
        <div className="text-center mb-5">
            <img src="assets_admin/images/hospital-logo.png" height="48" className='mb-4'/>
            <h3>Sign Up</h3>
            <p>Please fill the form to register.</p>
        </div>
        <form action="index.html">
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" className="form-control"  name="first-name"/>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" className="form-control"  name="last-name"/>
                    </div>
                </div>
                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" name="email"/>
                    </div>
                </div>
                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="contact-no">Contact Number</label>
                        <input type="text" id="contact-no" className="form-control" name="contact-no"/>
                    </div>
                </div>
                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" className="form-control" name="password"/>
                    </div>
                </div>
               
            </div>
                <Link to="/login">Have an account? Login</Link>      
            <div className="clearfix">
                <button className="btn btn-primary float-right">Submit</button>
            </div>
        </form>
                   
    </AuthLayout>
  )
}

export default Register