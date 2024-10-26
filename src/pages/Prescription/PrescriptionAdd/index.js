import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';

function PrescriptionAdd() {
    const [inputs, setInputs] = useState({ id: '', doctor_id: '', patient_id: '', age: '', address: '', temp: '', weight: '', bp: '', cc: '', inv: '', mh: '',de:'',advice: '',follow_up: '', issue_date: ''
    });

    const [arr, setArr] = useState([{ id: 0, type: "text", value: "" }]);
    const navigate = useNavigate();
    const { id } = useParams();

    const getDatas = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/prescription/${id}`);
            setInputs(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addInput = () => {
        setArr(s => [...s, { id: s.length, type: "text", value: "" }]);
    };

    useEffect(() => {
        if (id) {
            getDatas();
        }
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleDynamicChange = (index, value) => {
        setArr(s => {
            const newArr = s.slice();
            newArr[index].value = value;
            return newArr;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiurl = inputs.id ? `/prescription/edit/${inputs.id}` : `/prescription/create`;
            await axios.post(`${process.env.REACT_APP_API_URL}${apiurl}`, inputs);
            navigate('/prescription');
        } catch (error) {
            console.error(error);
        }
    };

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
                                                <div className="row form-group">
                                                    <div className='col-4'>
                                                        <label>Age:</label>
                                                        <input type="text" id="age" className="form-control" value={inputs.age} name="age" onChange={handleChange} placeholder="Input Patient Age" />
                                                        <label>Address:</label> <br/>
                                                        <textarea cols="33" defaultValue={inputs.address} name="address" onChange={handleChange} />
                                                        <label>Weight:</label>
                                                        <input type="text" id="weight" className="form-control" value={inputs.weight} name="weight" onChange={handleChange} />
                                                        <label>Temperature:</label>
                                                        <input type="text" id="temperature" className="form-control" value={inputs.temp} name="temp" onChange={handleChange} />
                                                        <label>BP:</label> <br/>
                                                        <textarea cols="33" defaultValue={inputs.bp} name="bp" onChange={handleChange} />
                                                        <label>Cheif complaint:</label> <br/>
                                                        <textarea cols="33" defaultValue={inputs.cc} name="cc" onChange={handleChange} placeholder="CC"/>
                                                        <label>Clinical Finding:</label> <br/>
                                                        <textarea cols="33" defaultValue={inputs.inv} name="inv" onChange={handleChange} placeholder="Investigation"/>
                                                        <label>Medical history:</label> <br/>
                                                        <textarea cols="33" defaultValue={inputs.mh} name="mh" onChange={handleChange} />
                                                       
                                                    </div>
                                                    <div className='col-8 '>
                                                    <lable>RX:</lable>
                                                         <div>
                                                            {arr.map((item, i) => (
                                                                <div className='row'>
                                                                    
                                                                    <div className='col-3'>
                                                                        <input
                                                                            key={item.id}
                                                                            onChange={(e) => handleDynamicChange(i, e.target.value)}
                                                                            value={item.value}
                                                                            type={item.type}
                                                                            size="40"
                                                                            className="form-control mb-2"
                                                                        />
                                                                    </div>
                                                                    <div className='col-3'>
                                                                        <input
                                                                            key={item.id}
                                                                            onChange={(e) => handleDynamicChange(i, e.target.value)}
                                                                            value={item.value}
                                                                            type={item.type}
                                                                            size="40"
                                                                            className="form-control mb-2"
                                                                        />
                                                                    </div>
                                                                    <div className='col-3'>
                                                                        <input
                                                                            key={item.id}
                                                                            onChange={(e) => handleDynamicChange(i, e.target.value)}
                                                                            value={item.value}
                                                                            type={item.type}
                                                                            size="40"
                                                                            className="form-control mb-2"
                                                                        />
                                                                    </div>
                                                                    <div className='col-3'>
                                                                        <input
                                                                            key={item.id}
                                                                            onChange={(e) => handleDynamicChange(i, e.target.value)}
                                                                            value={item.value}
                                                                            type={item.type}
                                                                            size="40"
                                                                            className="form-control mb-2"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="d-flex justify-content-center mt-2"> {/* Centering the button */}
                                                            <button type="button" onClick={addInput} className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dpad-fill" viewBox="0 0 16 16">
  <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v3a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 16 9.5v-3A1.5 1.5 0 0 0 14.5 5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 9.5 0zm1.288 2.34a.25.25 0 0 1 .424 0l.799 1.278A.25.25 0 0 1 8.799 4H7.201a.25.25 0 0 1-.212-.382zm0 11.32-.799-1.277A.25.25 0 0 1 7.201 12H8.8a.25.25 0 0 1 .212.383l-.799 1.278a.25.25 0 0 1-.424 0Zm-4.17-4.65-1.279-.798a.25.25 0 0 1 0-.424l1.279-.799A.25.25 0 0 1 4 7.201V8.8a.25.25 0 0 1-.382.212Zm10.043-.798-1.278.799A.25.25 0 0 1 12 8.799V7.2a.25.25 0 0 1 .383-.212l1.278.799a.25.25 0 0 1 0 .424Z"/>
</svg></button>
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
    );
}

export default PrescriptionAdd;
