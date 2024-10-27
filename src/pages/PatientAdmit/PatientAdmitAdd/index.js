import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function PatientAdmitAdd() {
    const [inputs, setInputs] = useState({id:'',patient_id:'', doctor_id:'', problem:'', admit_date:'',release_date:'',room_id:'',guardian:'',relation:'',condition:''});
    const [patient, setPatient] = useState([]);
    const [doctor, setDoctor] = useState([]);
    const [roomlist, setRoom_List] = useState([]);
    
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/patientadmit/${id}`).then(function(response) {
            setInputs(response.data.data);
            console.log(response)
        });
    }
    function getRelational(){
        axios.get(`${process.env.REACT_APP_API_URL}/patient/index`).then(function(response) {
            setPatient(response.data.data);
        });
        axios.get(`${process.env.REACT_APP_API_URL}/doctor/index`).then(function(response) {
            setDoctor(response.data.data);
        });
        axios.get(`${process.env.REACT_APP_API_URL}/roomlist/index`).then(function(response) {
            setRoom_List(response.data.data);
        });
    }

    useEffect(() => {
        if(id){
            getDatas();
        }
        getRelational()
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
                apiurl=`/patientadmit/${inputs.id}`;
            }else{
                apiurl=`/patientadmit/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/patientadmit')
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
                        <h3>Admit New Patient</h3>
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
                                                    <label > Patient ID:</label>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    {patient.length > 0 && 
                                                        <select className="form-control" id="patient_id" name='patient_id' defaultValue={inputs.patient_id} onChange={handleChange}>
                                                            <option value="">Select Patient</option>
                                                            {patient.map((d, key) =>
                                                                <option value={d.id}>{d.name}</option>
                                                            )}
                                                        </select>
                                                    }
                                                </div>
                                               
                                                <div className="col-md-2">
                                                    <label>Doctor:</label>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    {doctor.length > 0 && 
                                                        <select className="form-control" id="doctor_id" name='doctor_id' defaultValue={inputs.doctor_id} onChange={handleChange}>
                                                            <option value="">Select Doctor</option>
                                                            {doctor.map((d, key) =>
                                                                <option value={d.id}>{d.name}</option>
                                                            )}
                                                        </select>
                                                    }
                                                </div>
                                                <div className="col-md-2">
                                                    <label>Room No:</label>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    {roomlist.length > 0 && 
                                                        <select className="form-control" id="room_id" name='room_id' defaultValue={inputs.room_id} onChange={handleChange}>
                                                            <option value="">Select Room No</option>
                                                            {roomlist.map((d, key) =>
                                                                <option value={d.id}>{d.room_no}</option>
                                                            )}
                                                        </select>
                                                    }
                                                </div>
                                                <div className="col-md-2">
                                                    <label>Gaurdian:</label>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <input type="text" id="guardian" className="form-control" name="guardian" defaultValue={inputs.guardian}  onChange={handleChange} />
                                                </div>
                                                <div className="col-md-2">
                                                    <label>Relation:</label>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <input type="text" id="relation" className="form-control" name="relation" defaultValue={inputs.relation}  onChange={handleChange} />
                                                                </div>
                                                <div className="col-md-2">
                                                    <label>Problem:</label>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <textarea id="problem" className="form-control" name="problem" defaultValue={inputs.problem}  onChange={handleChange}></textarea>
                                                    
                                                </div>
                                                <div className="col-md-2">
                                                    <label>Condition:</label>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <textarea id="condition" className="form-control" name="condition" defaultValue={inputs.condition}  onChange={handleChange}></textarea>
                                                    
                                                </div>
                                                <div className="col-md-2">
                                                    <label>Admit Date:</label>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <input type="date" id="admit_date" className="form-control" name="admit_date" defaultValue={inputs.admit_date}  onChange={handleChange} placeholder="Contact Number"/>
                                                </div>
                                                <div className="col-md-2">
                                                    <label>Release Date:</label>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <input type="date" id="release_date" className="form-control" name="release_date" defaultValue={inputs.release_date}  onChange={handleChange} placeholder="Contact Number"/>
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

export default PatientAdmitAdd