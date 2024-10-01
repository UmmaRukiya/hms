import axios from 'axios';
import {useNavigate } from "react-router-dom";

const login = async (data) => {
    const LOGIN_ENDPOINT = `${process.env.REACT_APP_API_URL}/login`;
    try{
        let response= await axios({
            method: 'post',
            url: LOGIN_ENDPOINT,
            data: data
        });

        if(response.data.data.token){
            localStorage.setItem("access_token", response.data.data.token);
            localStorage.setItem("userdata", response.data.data.data);
            return true;
        }else{
            return false;
        }
    }catch(e){
       // return false;
        console.log(e);
    }
}
const register = async (data)=> {
    const SIGNUP_ENDPOINT = `${process.env.REACT_APP_API_URL}/register`;
    try{
        let response= await axios({
            method: 'post',
            responsiveTYpe: 'json',
            url: SIGNUP_ENDPOINT,
            data: data,
            withCredentials:true,
            headers:{
                Accept:"application/json",
                "X-Request-With":"XMLHttpRequest",
                'Access-Control-Allow-origin':'*',
                "Content-Type":'multipart/form-data'
            }
        });
        console.log(response);
    } 
    catch(e){
        console.log(e);
    }
}
const logout = ()=>{
    localStorage.removeItem("access_token");
    localStorage.removeItem("userdata");
}

export  { login, register, logout  }