import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function PatientBill() {
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/patientbill/index`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/patientbill/${id}`).then(function(response){
            getDatas();
        });
    }

    const generatePrintableBill = (bill) => {
        const printContent = `
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Invoice</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <style>
                    h4, h3 {
                        color: #00008B;
                    }
                    h3 {
                        padding-top: 80px;
                        padding-left: 20px;
                    }
                    .head {
                        background-color: aliceblue;
                    }
                    .container {
                        font-family: Arial, sans-serif;
                        font-size: 14px;
                    }
                    .row {
                        margin-bottom: 10px;
                    }
                   
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="row border p-2">
                        <div class="col-4">
                            <h3>Invoice</h3>
                        </div>
                        <div class="col-4 text-center pt-5">
                            <img src="/log.png" alt="Logo" style="width: 80px; height: 80px;">
                        </div>
                        <div class="col-4 pt-5">
                            <h4>HMS Hospital</h4>
                            <span>2no gate, Chattogram</span><br>
                            <span>Emergency Contact Number & Reception Number:</span><br>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                            </svg> 02-334455071, 02-333336970</span><br>
                            <i class="fa fa-mobile" aria-hidden="true"></i> 01894-713301, 01894-713302, 01894-713303
                        </div>
                    </div>
    
                    <hr />
    
                    <div class="row border p-2">
                        <div class="col-8">
                            <div>Patient Name: ${bill.patient?.name}</div>
                            <div>Age: ${bill.age}</div>
                            <div>Gender: ${bill.patient?.gender || 'N/A'}</div>
                            <div>Address: ${bill.patient?.present_address || 'N/A'}</div>
                            <div>Father/Husband: ${bill.patient?.father_name || 'N/A'}</div>
                        </div>
                        <div class="col-4">
                            <div>Bill ID: ${bill?.id}</div>
                            <div>Admit ID: ${bill?.admit_id}</div>
                            <div>Room No.: ${bill.patientadmit?.room_id || 'N/A'}</div>
                            <div>Admit Date: ${(bill.patientadmit?.admit_date)}</div>
                            <div>Discharge Date: ${(bill.patientadmit?.release_date)|| 'Not yet discharge'}</div>
                            <div>Bill Date: ${new Date(bill.bill_date).toLocaleDateString()}</div>
                        </div>
                    </div>
    
                    <hr />
    
                    <div class="row border p-2 head">
                        <div class="col-6 fw-bold">Services</div>
                        <div class="col-3 fw-bold text-center"></div>
                        <div class="col-3 fw-bold text-center">Amount</div>
                    </div>
    
                    <hr />
    
                    ${bill.details && bill.details.length > 0 
                        ? bill.details.map(detail => `
                            <div class="row border p-2">
                                <div class="col-6">${detail.particular}</div>
                                <div class="col-3 text-center"></div>
                                <div class="col-3 text-center">${detail.amount || 'N/A'}</div>
                            </div>`
                        ).join('')
                        : '<div class="row px-4"><div class="col-12">No services found.</div></div>'
                    }
    
                    <hr />
    
                    <div class="row d-flex justify-content-end">
                        <div class="col-3 fw-bold">Discount (%):</div>
                        <div class="col-3">${bill.discount || 'N/A'}</div>
                    </div>
    
                    <div class="row d-flex justify-content-end">
                        <div class="col-3 fw-bold">Tax (%):</div>
                        <div class="col-3">${bill.tax || 'N/A'}</div>
                    </div>
    
                    <div class="row d-flex justify-content-end">
                        <div class="col-3 fw-bold">Total:</div>
                        <div class="col-3">${bill.total_amount || 'N/A'}</div>
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
                        <h3>Bill</h3>
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
                            <h4 className="card-title">All Bill</h4>
                            {/* <Link to={'/patientbill/add'} className='btn btn-primary float-right' >Add New</Link> */}
                        </div>
                        <div className="card-content">
                            <div className="table-responsive">
                                <table className="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th>Patient Name</th>
                                            <th>Admit ID</th>
                                            <th>Sub Amount</th>
                                            <th>Discount</th>
                                            <th>Tax</th>
                                            <th>Total Amount</th>
                                            <th>Bill Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data && data.map((d, key) =>
                                        <tr key={d.id}>
                                            <td className="text-bold-500">{d.patient?.name}</td>
                                            <td>{d.admit_id}</td>
                                            <td>{d.sub_amount}</td>
                                            <td>{d.discount}</td>
                                            <td>{d.tax}</td>
                                            <td>{d.total_amount}</td>
                                            <td>{d.bill_date}</td>
                                            <td>
                                            <button type='button' onClick={() => generatePrintableBill(d)} className='btn btn-outline-secondary'> 
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                                                                <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/>
                                                                <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                                                            </svg>
                                                        </button>
                                            <Link to={`/patientbill/edit/${d.id}`} className='btn btn-info' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/> 
</svg></Link>
                                                <button type='button' onClick={() => deleteData(d.id)} className='btn btn-outline-danger'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg></button>
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

export default PatientBill