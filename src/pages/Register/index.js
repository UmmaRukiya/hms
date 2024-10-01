import React, { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../Api/AllApi';

function Register() {
    const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(inputs);
        //navigate('/login')
    }
  return (
    <AuthLayout>
        <div className="text-center mb-5">
            <img src="assets_admin/images/hospital-logo.png" height="48" className='mb-4'/>
            <h3>Sign Up</h3>
            <p>Please fill the form to register.</p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="first-name">Full Name</label>
                        <input type="text" id="first-name" className="form-control" onChange={handleChange} name="name"/>
                    </div>
                </div>
                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" onChange={handleChange} name="email"/>
                    </div>
                </div>
                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" className="form-control" onChange={handleChange} name="password"/>
                    </div>
                </div>
                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="text" id="password" className="form-control" onChange={handleChange} name="c_password"/>
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