import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function NurseAdd() {
    const [inputs, setInputs] = useState({
       id:'',role_id:'', name:'', email:'', contact:'', image:'', gender:'',birth_date:'', blood_id:'', present_address:'', permanent_address:''
    });
    const [role, setRole] = useState([]); //role table
    const [blood, setBlood] = useState([]); //blood table
    const [selectedfile, setSelectedFile] = useState([]);//for image 

    const navigate = useNavigate();
    const { id } = useParams();

    const getDatas = async (e) => {
        let response = await axios.get(`/nurse/${id}`);
        setInputs(response.data.data);
    }
    //for relation table start
    const getRelational = async (e) => {
        let roles = await axios.get(`/role/index`)
        setRole(roles.data.data);
        let bloods = await axios.get(`/blood/index`)
        setBlood(bloods.data.data);
        
    }
//relation table end
    useEffect(() => {
        if (id) {
            getDatas();
        }
        getRelational()
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    //for image 
    const handelFile = (e) => {
        setSelectedFile(e.target.files)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        for (let i = 0; i < selectedfile.length; i++) {
            formData.append('files[]', selectedfile[i])
        }

        for (const property in inputs) {
            formData.append(property, inputs[property])
        }

        try {
            let apiurl = '';
            if (inputs.id != '') {
                apiurl = `/nurse/${inputs.id}`;
            } else {
                apiurl = `/nurse/create`;
            }
            let res = await axios.post(apiurl, formData)
            console.log(res);
            navigate('/nurse')
        }
        catch (e) {
            console.log(e);
        }
    }
  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 order-last">
                        <h3>Add New Nurse</h3>
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
                                <div className="col-md-4 form-group">
                                    <input type="text" id="name" className="form-control" name="name" defaultValue={inputs.name}  onChange={handleChange}  placeholder="Name"/>
                                </div>
                                <div className="col-md-2">
                                    <label>Role ID</label>
                                </div>
                                <div className="col-md-4">
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
                                    <input type="text" id="contact" className="form-control" name="contact" defaultValue={inputs.contact}  onChange={handleChange} placeholder="Contact Number"/>
                                </div>
                                <div className="col-md-2">
                                    <label>Blood Group</label>
                                </div>
                                <div className="col-md-4">
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
                                <input type="file" id="image" className="form-control" multiple defaultValue={inputs.image} name="image" onChange={handelFile} placeholder="Image" />
                                </div>
                                
                                <div className="col-md-2">
                                    <label>Present Address</label>
                                </div>
                                <div className="col-md-10 form-group">
                                    <textarea rows="2"cols="43" defaultValue={inputs.present_address} name="present_address" onChange={handleChange} placeholder="Type your present address here..."/>
                            
                                </div>
                                <div className="col-md-2">
                                    <label>Permanent Address</label>
                                </div>
                                <div className="col-md-10 form-group">
                                <textarea rows="2"cols="43" defaultValue={inputs.permanent_address} name="permanent_address" onChange={handleChange} placeholder="Type your permanent address here..."/>
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

export default NurseAdd