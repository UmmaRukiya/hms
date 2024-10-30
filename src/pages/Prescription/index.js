import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Prescription() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/prescription/index`).then(function(response) {
            setData(response.data.data);
        });
    }

    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/prescription/${id}`).then(function(response){
            getDatas();
        });
    };

    const generatePrintablePrescription = (prescription) => {
        const printContent = `
            <html>
            <head>
                <title>Prescription</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
                <style>
                    body {
                        background-image: url('../log.png'); /* Adjust the path to your image */
                        /* background-size: cover;  */
                        background-position: center ; /* Center the image */
                        background-repeat: no-repeat; /* Prevent repeating */
                        /* color: white;  */
                        background-size: 600px 450px;
                    }
                    .container {
                        background-color: rgba(255, 255, 255, 0.8); /* Optional: semi-transparent white background for readability */
                        border-radius: 10px; /* Optional: rounded corners */
                        padding: 20px; /* Optional: padding around content */
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="row">
                        <div class="col-4 pt-5">
                            <h6>Dr. ${prescription.doctor?.name}</h6>
                            <div>${prescription.doctor?.education} (Reg no.: 12345)</div>
                            <div>Mob. No: 123455645</div>
                        </div>
                        <div class="col-4 rounded mx-auto d-block pt-5 px-5">
                            <img src="../log.png" alt="Logo" style="width: 80px; height: 80px;">
                        </div>
                        <div class="col-4 pt-5">
                            <h4>HMS Hospital</h4>
                            <span>2no gate, Chattogram</span><br>
                            <span>Emergency Contact Number & Reception Number:</span><br>
                            <span>02-334455071, 02-333336970</span><br>
                            <span>01894-713301, 01894-713302, 01894-713303</span>
                        </div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="col-8 px-4">
                            <div>Patient ID: ${prescription.patient?.name}</div>
                            <div>Age: ${prescription.age}</div>
                            <div>Address: ${prescription.patient?.present_address || 'N/A'}</div>
                            <div>Temp(deg): ${prescription.temp}</div>
                            <div>Weight: ${prescription.weight}</div>
                            <div>BP: ${prescription.bp}</div>
                        </div>
                        <div class="col-4 px-5">
                            <span>Date: ${new Date(prescription.issue_date).toLocaleDateString()}</span><br>
                            <span>Time: ${new Date(prescription.issue_date).toLocaleTimeString()}</span>
                        </div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="col-6 fw-bold px-5">Chief Complaints</div>
                        <div class="col-6 fw-bold px-5">Clinical Findings</div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="col-6 px-5">${prescription.cc || 'N/A'}</div>
                        <div class="col-6 px-5">${prescription.inv || 'N/A'}</div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="col-4 fw-bold px-5">Medicine Name</div>
                        <div class="col-4 fw-bold px-5">Dosage</div>
                        <div class="col-4 fw-bold px-5">Duration</div>
                    </div>
                    <hr/>
                    ${prescription.details ? prescription.details.map(med => `
                    <div class="row px-4">
                        <div class="col-4">${med.medicine?.medicine_name}</div>
                        <div class="col-4">${med.dosage}</div>
                        <div class="col-4">${med.duration}</div>
                    </div>
                    <hr/>`).join('') : '<div class="row px-4"><div class="col-12">No medicines prescribed.</div></div><hr/>'}
                    <div class="row">
                        <div class="fw-bold px-5 pt-5">Advice:</div>
                        <div class="px-5">${prescription.advice || 'N/A'}</div>
                    </div>
                    <div class="row">
                        <div class="fw-bold px-5 pt-5">Follow Up: ${prescription.follow_up || 'N/A'}</div>
                    </div>
                </div>
            </body>
            </html>
        `;
    
        const newWindow = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        newWindow.document.write(printContent);
        newWindow.document.close();
        newWindow.focus();
        newWindow.print();
    };
    

    return (
        <AdminLayout>
            <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-12 col-md-6 order-md-1 order-last">
                            <h3>Prescription</h3>
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
                                <h4 className="card-title">All Prescription</h4>
                                {/* <Link to={'/prescription/add'} className='btn btn-primary float-right' >Add New</Link> */}
                            </div>
                            <div className="card-content">
                                <div className="table-responsive">
                                    <table className="table table-bordered mb-0">
                                        <thead>
                                            <tr>
                                                <th>Patient Name</th>
                                                <th>Age</th>
                                                <th>Temperature</th>
                                                <th>Weight</th>
                                                <th>BP</th>
                                                <th>Chief Complaint</th>
                                                <th>Investigation</th>
                                                <th>Medical History</th>
                                                
                                                <th>Doctor</th>
                                                <th>Advice</th>
                                                <th>Follow Up</th>
                                                <th>Issue Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((d) =>
                                                <tr key={d.id}>
                                                    <td>{d.patient?.name}</td>
                                                    <td>{d.age}</td>
                                                    <td>{d.temp}</td>
                                                    <td>{d.weight}</td>
                                                    <td>{d.bp}</td>
                                                    <td>{d.cc}</td>
                                                    <td>{d.inv}</td>
                                                    <td>{d.mh}</td>
                                                    
                                                    <td>{d.doctor_id}</td>
                                                    <td>{d.advice}</td>
                                                    <td>{d.follow_up}</td>
                                                    <td>{d.issue_date}</td>
                                                    <td>
                                                        <button type='button' onClick={() => generatePrintablePrescription(d)} className='btn btn-outline-secondary'> 
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                                                                <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/>
                                                                <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                                                            </svg>
                                                        </button>
                                                        <Link to={`/prescription/edit/${d.id}`} className='btn btn-info'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                                        </svg>
                                                        </Link>
                                                        <button type='button' onClick={() => deleteData(d.id)} className='btn btn-outline-danger'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                                        </svg>
                                                        </button>
                                                        
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
    );
}

export default Prescription;
