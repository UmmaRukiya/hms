import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function DoctorAdd() {
    const [inputs, setInputs] = useState({
       id:'',role_id:'', name:'',designation_id:'',department_id:'', email:'', contact:'', image:'', specialist:'',education:'', biography:'', fees:''
    });
    const [role, setRole] = useState([]); //role table
    const [designation, setDesignation] = useState([]); //designation table
    const [department, setDepartment] = useState([]); //department table
    const [selectedfile, setSelectedFile] = useState([]);//for image 

    const navigate = useNavigate();
    const { id } = useParams();

    const getDatas = async (e) => {
        let response = await axios.get(`/doctor/${id}`);
        setInputs(response.data.data);
    }
    //for relation table start
    const getRelational = async (e) => {
        let roles = await axios.get(`/role/index`)
        setRole(roles.data.data);
        let designations = await axios.get(`/designation/index`)
        setDesignation(designations.data.data);
        let departments = await axios.get(`/department/index`)
        setDepartment(departments.data.data);
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
                apiurl = `/doctor/${inputs.id}`;
            } else {
                apiurl = `/doctor/create`;
            }
            let res = await axios.post(apiurl, formData)
            console.log(res);
            navigate('/doctor')
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
                        <h3>Add New Doctor</h3>
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
                                                    <label htmlFor="role_id">Role ID</label>
                                                    {role.length > 0 && 
                                                        <select className="form-control" id="role_id" name='role_id' defaultValue={inputs.role_id} onChange={handleChange}>
                                                            <option value="">Select Role</option>
                                                            {role.map((d, key) =>
                                                                <option value={d.id}>{d.role_name}</option>
                                                            )}
                                                        </select>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="first-name-vertical">Name</label>
                                                    <input type="text" id="first-name-vertical" className="form-control" defaultValue={inputs.name} name="name" onChange={handleChange} placeholder="Full Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="email-id-vertical">Designation</label>
                                                    {designation.length > 0 && 
                                                        <select className="form-control" id="designation_id" name='designation_id' defaultValue={inputs.designation_id} onChange={handleChange}>
                                                            <option value="">Select Designation</option>
                                                            {designation.map((d, key) =>
                                                                <option value={d.id}>{d.desig_name}</option>
                                                            )}
                                                        </select>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="email-id-vertical">Department</label>
                                                    {department.length > 0 && 
                                                        <select className="form-control" id="department_id" name='department_id' defaultValue={inputs.department_id} onChange={handleChange}>
                                                            <option value="">Select Department</option>
                                                            {department.map((d, key) =>
                                                                <option value={d.id}>{d.dep_name}</option>
                                                            )}
                                                        </select>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="email-id-vertical">Email</label>
                                                    <input type="text" id="email" className="form-control" defaultValue={inputs.email} name="email" onChange={handleChange} placeholder="Specialist"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="contact">Contact</label>
                                                    <input type="text" id="contact" className="form-control" defaultValue={inputs.contact} name="contact" onChange={handleChange} placeholder="Specialist"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="image">Image</label>
                                                    <input type="file" id="email-id-vertical" className="form-control" multiple defaultValue={inputs.image} name="image" onChange={handelFile} placeholder="Image" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="email-id-vertical">Specialist</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.specialist} name="specialist" onChange={handleChange} placeholder="Specialist"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="email-id-vertical">Education</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.education} name="education" onChange={handleChange} placeholder="Education"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="biography">Biography</label>
                                                    <input type="text" id="biography" className="form-control" defaultValue={inputs.biography} name="biography" onChange={handleChange} placeholder="Education"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="email-id-vertical">Fees</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.fees} name="fees" onChange={handleChange} placeholder="000.00"/>
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

export default DoctorAdd