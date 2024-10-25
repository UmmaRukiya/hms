
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function BloodAdd() {
    const [inputs, setInputs] = useState({id: '', shift_name:'', start_time:'', end_time:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/shift/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }

    useEffect(() => {
        if(id){
            getDatas();
        }
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(inputs)
        
        try{
            let apiurl='';
            if(inputs.id!=''){
                apiurl=`/shift/${inputs.id}`;
            }else{
                apiurl=`/shift/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/shift')
        } 
        catch(e){
            console.log(e);
        }
    }
  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 order-last">
                        <h3>Add New Shift</h3>
                    </div>
                    <div className="col-12 col-md-6 order-md-2 order-first">
                        <nav aria-label="breadcrumb" className='breadcrumb-header'>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Add New</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <section id="basic-vertical-layouts">
                <div className="row match-height">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                    <form className="form form-vertical" onSubmit={handleSubmit}>
                                        <div className="form-body">
                                        <div className="row form-group">
                                <div className="col-md-2">
                                    <label > Name</label>
                                </div>
                                <div className="col-md-10 form-group">
                                    <input type="text" id="shift_name" className="form-control" name="shift_name" defaultValue={inputs.shift_name}  onChange={handleChange}  placeholder="Name of Shift"/>
                                </div>
                               
                                <div className="col-md-2">
                                    <label > Start Time</label>
                                </div>
                                <div className="col-md-10 form-group">
                                    <input type="time" id="start_time" className="form-control" name="start_time" defaultValue={inputs.start_time}  onChange={handleChange}  placeholder="Shift Start Time.."/>
                                </div>
                                <div className="col-md-2">
                                    <label > End Time</label>
                                </div>
                                <div className="col-md-10 form-group">
                                    <input type="time" id="end_time" className="form-control" name="end_time" defaultValue={inputs.end_time}  onChange={handleChange}  placeholder="Shift End Time.."/>
                                </div>
                               
                               
                                <div className="col-12 d-flex justify-content-end">
                                                    <button type="submit" className="btn btn-primary mr-1 mb-1">Submit</button>
                                                    <button type="reset" className="btn btn-light-secondary mr-1 mb-1">Reset</button>
                                                </div>
                            </div>
                        
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </AdminLayout>    
  )
}

export default BloodAdd