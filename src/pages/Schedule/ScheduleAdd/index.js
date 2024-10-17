import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function ScheduleAdd() {
    // const SectionSelect = ({ role, selectedRole }) => {
    //     return (
    //         <div className="col-md-4">
    //             <label className="form-label" htmlFor="role_id">Role</label>
    //             <select className="form-control form-select" required name="role_id" id="role_id">
    //                 <option value="">Select Role</option>
    //                 {role && role.length > 0 ? (
    //                     role.map(role => (
    //                         <option 
    //                             key={role.id} 
    //                             value={role.id} 
    //                             selected={selectedRole === role.name}
    //                         >
    //                             {role.role}
    //                         </option>
    //                     ))
    //                 ) : null}
    //             </select>
    //         </div>
    //     );
    // };
    const [inputs, setInputs] = useState({id:'',employe_id:'',day_id:'',shift_id:'',status:''});
    const [employe, setEmploye] = useState([]);
    const [day, setDay] = useState([]);
    const [shift, setShift] = useState([]);
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/doctor/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }
    function get_relation(){
        axios.get(`${process.env.REACT_APP_API_URL}/employe/index`).then(function(response) {
            setEmploye(response.data.data);
        });
        axios.get(`${process.env.REACT_APP_API_URL}/day/index`).then(function(response) {
            setDay(response.data.data);
        });
        axios.get(`${process.env.REACT_APP_API_URL}/shift/index`).then(function(response) {
            setShift(response.data.data);
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
                apiurl=`/schedule/edit/${inputs.id}`;
            }else{
                apiurl=`/schedule/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/schedule')
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
                        <h3>Add New Schedule</h3>
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
                                                    <label htmlFor="employe_id">Employee</label>
                                                    {employe.length > 0 && 
                                                        <select className="form-control" id="employe_id" name='employe_id' defaultValue={inputs.employe_id} onChange={handleChange}>
                                                            <option value="">Select Day</option>
                                                            {employe.map((d, key) =>
                                                                <option value={d.id}>{d.name_en}</option>
                                                            )}
                                                        </select>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="day_id">Day</label>
                                                    {day.length > 0 && 
                                                        <select className="form-control" id="day_id" name='day_id' defaultValue={inputs.day_id} onChange={handleChange}>
                                                            <option value="">Select Day</option>
                                                            {day.map((d, key) =>
                                                                <option value={d.id}>{d.day_name}</option>
                                                            )}
                                                        </select>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="email-id-vertical">Shift</label>
                                                    {shift.length > 0 && 
                                                        <select className="form-control" id="shift_id" name='shift_id' defaultValue={inputs.shift_id} onChange={handleChange}>
                                                            <option value="">Select Shift</option>
                                                            {shift.map((d, key) =>
                                                                <option value={d.id}>{d.dep_name}</option>
                                                            )}
                                                        </select>
                                                    }
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

export default ScheduleAdd