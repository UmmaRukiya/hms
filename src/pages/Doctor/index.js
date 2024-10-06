import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Doctor() {
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/doctor/index`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/doctor/${id}`).then(function(response){
            getDatas();
        });
    }
  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 order-last">
                        <h3>Doctor</h3>
                    </div>
                    <div className="col-12 col-md-6 order-md-2 order-first">
                        <nav aria-label="breadcrumb" className='breadcrumb-header'>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active" aria-current="page">List</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="row" id="table-bordered">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">All Designation</h4>
                            <Link to={'/doctor/add'} className='btn btn-primary float-right' >Add New</Link>
                        </div>
                        <div className="card-content">
                            <div className="table-responsive">
                                <table className="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Designation</th>
                                            <th>Department</th>
                                            <th>specialist</th>
                                            <th>education</th>
                                            <th>fees</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data && data.map((d, key) =>
                                        <tr key={d.id}>
                                            <td className="text-bold-500">{d.name}</td>
                                            <td>{d.designation_id}</td>
                                            <td>{d.department_id}</td>
                                            <td>{d.specialist}</td>
                                            <td>{d.education}</td>
                                            <td>{d.fees}</td>
                                            <td>
                                                <Link to={`/doctor/edit/${d.id}`} className='btn btn-info' >Edit</Link>
                                                <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </AdminLayout>    
  )
}

export default Doctor