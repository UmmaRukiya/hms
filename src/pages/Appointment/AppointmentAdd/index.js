import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function AppointmentAdd() {
    const [inputs, setInputs] = useState({id:'',patient_name:'',doctor_id:'',app_date:'',serial:'',time:'', problem:'', status:''});
    const [doctor, setDoctor] = useState([]);
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/appointment/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }
    function get_relation(){
        axios.get(`${process.env.REACT_APP_API_URL}/doctor/index`).then(function(response) {
            setDoctor(response.data.data);
        });
       
    }

    useEffect(() => {
        if(id){
            getDatas();
        }
        get_relation();
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
                apiurl=`/appointment/edit/${inputs.id}`;
            }else{
                apiurl=`/appointment/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/appointment')
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
                        <h3>Add New Appointment</h3>
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
                                            <div className="row">
                                            <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="serial">Serial</label>
                                                    <input type="text" id="serial" className="form-control" defaultValue={inputs.serial} name="serial" onChange={handleChange} placeholder="Serial no..."/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="patient_name">Patient Name</label>
                                                    <input type="text" id="patient_name" className="form-control" defaultValue={inputs.patient_name} name="patient_name" onChange={handleChange} placeholder="Full Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="doctor_id">Doctor</label>
                                                        {doctor.length > 0 && 
                                                            <select className="form-control" id="doctor_id" name='doctor_id' defaultValue={inputs.doctor_id} onChange={handleChange}>
                                                                <option value="">Select Doctor</option>
                                                                {doctor.map((d, key) =>
                                                                    <option value={d.id}>{d.name}</option>
                                                                )}
                                                            </select>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                               
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="app_date">Date</label>
                                                    <input type="date" id="app_date" className="form-control" defaultValue={inputs.app_date} name="app_date" onChange={handleChange} placeholder="Appointment Date"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="time">Time</label>
                                                    <input type="time" id="time" className="form-control" defaultValue={inputs.time} name="time" onChange={handleChange} placeholder="Appointment Time"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="problem">Problem</label>
                                                    <input type="text" id="problem" className="form-control" defaultValue={inputs.problem} name="problem" onChange={handleChange} placeholder="Patient Problem .."/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="status">Status</label>
                                                    <input type="text" id="status" className="form-control" defaultValue={inputs.status} name="status" onChange={handleChange} placeholder="Select Status"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12 d-flex justify-content-end">
                                                    <button type="submit" className="btn btn-primary mr-1 mb-1">Submit</button>
                                                    <button type="reset" className="btn btn-light-secondary mr-1 mb-1">Reset</button>
                                                </div>
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

export default AppointmentAdd