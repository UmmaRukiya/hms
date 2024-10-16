import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function PrescriptionAdd() {
    const [inputs, setInputs] = useState({id:'',patient_id:'',cc:'',inv:'',advice:'',visit:'',status:''});
    const [patient, setPatient] = useState([]);
    
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/prescription/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }
    function get_relation(){
        axios.get(`${process.env.REACT_APP_API_URL}/patient/index`).then(function(response) {
            setPatient(response.data.data);
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
                apiurl=`/prescription/edit/${inputs.id}`;
            }else{
                apiurl=`/prescription/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/prescription')
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
                        <h3>Add New Prescription</h3>
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
                                                    <label htmlFor="patient_id">Patient ID</label>
                                                    {patient.length > 0 && 
                                                        <select className="form-control" id="patient_id" name='patient_id' defaultValue={inputs.app_id} onChange={handleChange}>
                                                            <option value="">Select Patient</option>
                                                            {patient.map((d, key) =>
                                                                <option value={d.id}>{d.name_en}</option>
                                                            )}
                                                        </select>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="cc">Chief Complaint</label>
                                                    <input type="text" id="cc" className="form-control" defaultValue={inputs.cc} name="cc" onChange={handleChange} placeholder="Specialist"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="inv">Test</label>
                                                    <input type="text" id="inv" className="form-control" defaultValue={inputs.inv} name="inv" onChange={handleChange} placeholder="Test"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="advice">Advice</label>
                                                    <input type="text" id="advice" className="form-control" defaultValue={inputs.advice} name="advice" onChange={handleChange} placeholder="Advice for Patient"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="visit">Visit</label>
                                                    <input type="date" id="visit" className="form-control" defaultValue={inputs.visit} name="visit" onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="status">Status</label>
                                                    <input type="text" id="status" className="form-control" defaultValue={inputs.status} name="status" onChange={handleChange} />
                                                    </div>
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

export default PrescriptionAdd