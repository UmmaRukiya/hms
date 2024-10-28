import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';

function PrescriptionAdd() {
    const [inputs, setInputs] = useState({ id: '', doctor_id: '', patient_id: '', age: '', address: '', temp: '', weight: '', bp: '', cc: '', inv: '', mh: '',de:'',advice: '',follow_up: '', issue_date: ''
    });

    const [arr, setArr] = useState([{ id: 0, medicine_id: "", duration: "", dosage: ""  }]);
    const [medicien, setMedicine] = useState([]);
    const [appointment, setAppointment] = useState([]);
    const [patient, setPatient] = useState([]);
    const navigate = useNavigate();
    const { id,app_id } = useParams();

    const getDatas = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/prescription/${id}`);
            setInputs(response.data.data);
            setPatient(response.data.data?.patient);
            setArr(response.data.data?.details)
            setInputs(values => ({ ...values, ['address']: response.data.data?.patient.present_address}));
        } catch (error) {
            console.error(error);
        }
    };
    function getRelational(){

        axios.get(`${process.env.REACT_APP_API_URL}/medicine/index`).then(function(response) {
            setMedicine(response.data.data);
        });

        if(app_id){
            axios.get(`${process.env.REACT_APP_API_URL}/appointment/${app_id}`).then(function(response) {
                setAppointment(response.data.data);
                setPatient(response.data.data?.patient);
                setInputs(values => ({ ...values, ['patient_id']: response.data.data?.paitent_id }));
                setInputs(values => ({ ...values, ['doctor_id']: response.data.data?.doctor_id }));
                setInputs(values => ({ ...values, ['address']: response.data.data?.patient.present_address}));
            });
        }
    }
    
    const addInput = () => {
        setArr(s => [...s, { id: s.length, medicine_id: "", duration: "", dosage: "" }]);
    };

    useEffect(() => {
        if (id) {
            getDatas();
        }
        getRelational();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleDynamicChange = (index, e) => {
        const nowData = arr[index]
        if(e.target.name=="medicine_id"){
            nowData.medicine_id=e.target.value
        }
        if(e.target.name=="dosage"){
            nowData.dosage=e.target.value
        }
        if(e.target.name=="duration"){
            nowData.duration=e.target.value
        }
        setArr(s => {
            const newArr = s.slice();
            newArr[index] = nowData;
            return newArr;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let obj={
            pres:inputs,
            pres_d:arr
        }
        
        try {
            const apiurl = inputs.id ? `/prescription/edit/${inputs.id}` : `/prescription/create`;
            await axios.post(`${process.env.REACT_APP_API_URL}${apiurl}`, obj);
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
                                                        
                                                        {patient && 
                                                            <>
                                                                <h3><label>Patient Name:</label> {patient?.name}</h3>
                                                                <label>Address:</label> <br/>
                                                                <textarea cols="33" defaultValue={patient?.present_address} name="address" onChange={handleChange} />
                                                            </>
                                                        }
                                                        <label>Age:</label>
                                                        <input type="text" id="age" className="form-control" defaultValue={inputs.age} name="age" onChange={handleChange} placeholder="Input Patient Age" />
                                                        <label>Weight:</label>
                                                        <input type="text" id="weight" className="form-control" defaultValue={inputs.weight} name="weight" onChange={handleChange} />
                                                        <label>Temperature:</label>
                                                        <input type="text" id="temperature" className="form-control" defaultValue={inputs.temp} name="temp" onChange={handleChange} />
                                                        <label>BP:</label> <br/>
                                                        <textarea cols="33" defaultValue={inputs.bp} name="bp" onChange={handleChange} />
                                                        <label>Cheif complaint:</label> <br/>
                                                        <textarea cols="33" defaultValue={inputs.cc} name="cc" onChange={handleChange} placeholder="CC"/>
                                                        <label>Clinical Finding:</label> <br/>
                                                        <textarea cols="33" defaultValue={inputs.inv} name="inv" onChange={handleChange} placeholder="Investigation"/>
                                                        <label>Medical history:</label> <br/>
                                                        <textarea cols="33" defaultValue={inputs.mh} name="mh" onChange={handleChange} />
                                                        <label>Advice:</label> <br/>
                                                        <textarea cols="33" defaultValue={inputs.advice} name="advice" onChange={handleChange} />
                                                        <label>follow Up:</label> <br/>
                                                        <input type="date" id="follow_up" className="form-control" defaultValue={inputs.follow_up} name="follow_up" onChange={handleChange} />
                                                        <label>Issue Date:</label> <br/>
                                                        <input type="date" id="issue_date" className="form-control" defaultValue={inputs.issue_date} name="issue_date" onChange={handleChange} />
                                                       
                                                    </div>
                                                    <div className='col-8 '>
                                                    <lable>RX:</lable>
                                                         <div>
                                                            <div className='row'>
                                                                <div className='col-6'>
                                                                    <b>Medicine</b>
                                                                </div>
                                                                <div className='col-3'>
                                                                    <b>Dosage</b>
                                                                </div>
                                                                <div className='col-3'>
                                                                    <b>Duration</b>
                                                                </div>
                                                            </div>
                                                            {arr.map((item, i) => (
                                                                <div className='row'>
                                                                    
                                                                    <div className='col-6'>
                                                                        {medicien.length > 0 && 
                                                                            <select className="form-control" defaultValue={item.medicine_id} name='medicine_id' onChange={(e) => handleDynamicChange(i, e)}>
                                                                                <option value="">Select Medicine</option>
                                                                                {medicien.map((d, key) =>
                                                                                    <option value={d.id}>{d.medicine_name} {d.dosage}</option>
                                                                                )}
                                                                            </select>
                                                                        }
                                                                    </div>
                                                                    <div className='col-3'>
                                                                        <input
                                                                            key={item.id}
                                                                            onChange={(e) => handleDynamicChange(i, e)}
                                                                            type="text"
                                                                            defaultValue={item.dosage}
                                                                            size="40"
                                                                            name='dosage'
                                                                            className="form-control mb-2"
                                                                        />
                                                                    </div>
                                                                    <div className='col-3'>
                                                                        <input
                                                                            key={item.id}
                                                                            onChange={(e) => handleDynamicChange(i, e)}
                                                                            type="text"
                                                                            defaultValue={item.duration}
                                                                            size="40"
                                                                            name='duration'
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
