import React,{useState} from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { login } from '../../Api/AllApi';

function Login(){
    const navigate = useNavigate();
    const [inputs, setInputs ] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let check = await login(inputs);
        console.log(check)
        if(check){
            window.location=process.env.REACT_APP_BASE_URL
        }else{
            alert("Sorry password or email address is wrong!");
        }
    }
    return(
        <AuthLayout>
            
            <div className="text-center mb-5">
        <img src="./assets_admin/hospital-logo.svg" height="48" className='mb-4'/>
        <h3>Sign In</h3>
        <p>Please sign in to continue to HMS.</p>
    </div>
    <form onSubmit={handleSubmit}>
        <div className="form-group position-relative has-icon-left">
            <label htmlFor="email">Email</label>
            <div className="position-relative">
                <input type="email" className="form-control" id="email" name="email" onChange={handleChange}/>
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
                <input type="text" className="form-control" id="password" name="password" onChange={handleChange}/>
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