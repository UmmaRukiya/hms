import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function RoomListAdd() {
    const [inputs, setInputs] = useState({id:'',room_cat_id:'',room_no:'',department_id:'',floor_no:'',description:'', status:'' });
    const [roomcat, setRoom_Cat] = useState([]);
    const [department, setDepartment] = useState([]);
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/roomlist/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }
    function get_relation(){
        axios.get(`${process.env.REACT_APP_API_URL}/roomcat/index`).then(function(response) {
            setRoom_Cat(response.data.data);
        });
        axios.get(`${process.env.REACT_APP_API_URL}/department/index`).then(function(response) {
            setDepartment(response.data.data);
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
                apiurl=`/roomlist/edit/${inputs.id}`;
            }else{
                apiurl=`/roomlist/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/roomlist')
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
                        <h3>Add Room List</h3>
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
                                                    <label htmlFor="first-name-vertical">Room Catagories</label>
                                                    {roomcat.length > 0 && 
                                                        <select className="form-control" id="room_cat_id" name='room_cat_id' defaultValue={inputs.room_cat_id} onChange={handleChange}>
                                                            <option value="">Select Room Catagories</option>
                                                            {roomcat.map((d, key) =>
                                                                <option value={d.id}>{d.room_cat_name}</option>
                                                            )}
                                                        </select>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="room_no">Room No</label>
                                                    <input type="text" id="room_no" className="form-control" defaultValue={inputs.room_no} name="room_no" onChange={handleChange} placeholder="Choose Department Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="department_id">Department ID</label>
                                                    {department.length > 0 && 
                                                        <select className="form-control" id="department_id" name='department_id' defaultValue={inputs.department_id} onChange={handleChange}>
                                                            <option value="">Select Room Catagories</option>
                                                            {department.map((d, key) =>
                                                                <option value={d.id}>{d.dep_name}</option>
                                                            )}
                                                        </select>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="floor_no">Floor No</label>
                                                    <input type="text" id="floor_no" className="form-control" defaultValue={inputs.floor_no} name="floor_no" onChange={handleChange} placeholder="Insert Floor No"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="description">Description</label>
                                                    <input type="text" id="description" className="form-control" defaultValue={inputs.description} name="description" onChange={handleChange} placeholder="Describe About Room..."/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="status">Status</label>
                                                    <input type="number" id="status" className="form-control" defaultValue={inputs.status} name="status" onChange={handleChange} placeholder="Room Avoilable or Not..."/>
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

export default RoomListAdd