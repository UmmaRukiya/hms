import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function EmployeAdd() {
    const [inputs, setInputs] = useState({id:'',role_id:'', name_en:'',  email:'', contact_no_en:'', gender:'', birth_date:'', blood_id:'', image:'', present_address:'', permanent_address:'', status:''});
    const [role, setRole] = useState([]);
    const [blood, setBlood] = useState([]);
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/employe/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }
    function get_relation(){
        axios.get(`${process.env.REACT_APP_API_URL}/role/index`).then(function(response) {
            setRole(response.data.data);
        });
        axios.get(`${process.env.REACT_APP_API_URL}/blood/index`).then(function(response) {
            setBlood(response.data.data);
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
                apiurl=`/employe/edit/${inputs.id}`;
            }else{
                apiurl=`/employe/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/employe')
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
                        <h3>Add New Employe</h3>
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
                                <div className="col-md-2">
                                    <label > Name</label>
                                </div>
                                <div className="col-md-10 form-group">
                                    <input type="text" id="name_en" className="form-control" name="name_en" defaultValue={inputs.name_en}  onChange={handleChange}  placeholder="Name"/>
                                </div>
                                <div className="col-md-2">
                                    <label>Role ID</label>
                                    {role.length > 0 && 
                                        <select className="form-control" id="role_id" name='role_id' defaultValue={inputs.role_id} onChange={handleChange}>
                                            <option value="">Select Role</option>
                                            {role.map((d, key) =>
                                                <option value={d.id}>{d.role_name}</option>
                                            )}
                                        </select>
                                    }
                                </div>
                                
                                <div className="col-md-2">
                                    <label>Birth Date</label>
                                </div>
                                <div className="col-md-4 form-group">
                                    <input type="date" id="birth_date" className="form-control" name="birth_date" defaultValue={inputs.birth_date}  onChange={handleChange} placeholder="dd/mm/yyyy"/>
                                </div>
                                <div className="col-md-2">
                                    <label>Gender</label>
                                </div>
                                <div className="col-md-4 form-group">
                                    <input type="text" id="gender" className="form-control" name="gender" defaultValue={inputs.gender}  onChange={handleChange} placeholder="Gender"/>
                                </div>
                                <div className="col-md-2">
                                    <label>Email</label>
                                </div>
                                <div className="col-md-4 form-group">
                                    <input type="email" id="email" className="form-control" name="email" defaultValue={inputs.email}  onChange={handleChange} placeholder="Email"/>
                                </div>
                                <div className="col-md-2">
                                    <label>Contact</label>
                                </div>
                                <div className="col-md-4 form-group">
                                    <input type="text" id="contact_no_en" className="form-control" name="contact_no_en" defaultValue={inputs.contact_no_en}  onChange={handleChange} placeholder="Contact Number"/>
                                </div>
                                <div className="col-md-2">
                                    <label>Blood Group</label>
                                    {blood.length > 0 && 
                                        <select className="form-control" id="blood_id" name='blood_id' defaultValue={inputs.blood_id} onChange={handleChange}>
                                            <option value="">Select Blood</option>
                                            {blood.map((d, key) =>
                                                <option value={d.id}>{d.blood_group}</option>
                                            )}
                                        </select>
                                    }
                                </div>
                               
                                <div className="col-md-2">
                                    <label>Image</label>
                                </div>
                                <div className="col-md-4 form-group">
                                    <input type="file" id="image" className="form-control" name="image" defaultValue={inputs.image}  onChange={handleChange} placeholder="Image"/>
                                </div>
                                <div className="col-md-2">
                                    <label>Status</label>
                                </div>
                                <div className="col-md-4 form-group">
                                    <input type="text" id="status" className="form-control" name="status" defaultValue={inputs.status}  onChange={handleChange} placeholder="Status"/>
                                </div>
                                <div className="col-md-2">
                                    <label>Present Address</label>
                                </div>
                                <div className="col-md-10 form-group">
                                    <textarea rows="3"cols="50" defaultValue={inputs.present_address} name="present_address"  onChange={handleChange} placeholder="Type your present address here..."/>
                            
                                </div>
                                <div className="col-md-2">
                                    <label>Permanent Address</label>
                                </div>
                                <div className="col-md-10 form-group">
                                <textarea rows="3"cols="50" defaultValue={inputs.permanent_address} name="permanent_address" onChange={handleChange} placeholder="Type your permanent address here..."/>
                                </div>
                                {/* <div className="col-md-2">
                                    <label>Status</label>
                                </div>
                                <div className="col-md-4 form-group">
                                    <input type="number" id="password" className="form-control" name="status" defaultValue={inputs.status}  onChange={handleChange} placeholder="Status"/>
                                </div> */}
                               
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

export default EmployeAdd