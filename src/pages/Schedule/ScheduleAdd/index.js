import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';

function ScheduleAdd() {
    const [inputs, setInputs] = useState({ id: '', doctor_id: '', day_id: [], shift_id: '', status: '' });
    const [doctors, setDoctors] = useState([]);
    const [days, setDays] = useState([]);
    const [shifts, setShifts] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();  // Used for editing, not required for create

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [shiftResponse, dayResponse, doctorResponse] = await Promise.all([
                    axios.get(`${process.env.REACT_APP_API_URL}/shift/index`),
                    axios.get(`${process.env.REACT_APP_API_URL}/day/index`),
                    axios.get(`${process.env.REACT_APP_API_URL}/doctor/index`), // Assuming doctor data is fetched here
                ]);
                setShifts(shiftResponse.data.data);
                setDays(dayResponse.data.data);
                setDoctors(doctorResponse.data.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "day_id") {
            // If the field is for multiple days, update the state as an array
            const selectedDays = Array.from(event.target.selectedOptions, option => option.value);
            setInputs((prevValues) => ({ ...prevValues, [name]: selectedDays }));
        } else {
            setInputs((prevValues) => ({ ...prevValues, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let apiurl = inputs.id ? `/schedule/edit/${inputs.id}` : '/schedule/create'; // Edit if `id` exists

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}${apiurl}`, inputs);
            navigate('/schedule');  // Navigate to schedule list or dashboard
        } catch (error) {
            console.error("Error submitting data", error);
        }
    };

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
                                                <div className="row form-group">
                                                    <div className="col-md-2">
                                                        <label htmlFor="doctor_id">Doctor</label>
                                                    </div>
                                                    <div className="col-md-10 form-group">
                                                        <select name="doctor_id" onChange={handleChange} value={inputs.doctor_id}>
                                                            <option value="">Select Doctor</option>
                                                            {doctors.map((doctor) => (
                                                                <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <div className="col-md-2">
                                                        <label htmlFor="day_id">Days</label>
                                                    </div>
                                                    <div className="col-md-10 form-group">
                                                        <select
                                                            name="day_id"
                                                            multiple
                                                            onChange={handleChange}
                                                            value={inputs.day_id}
                                                        >
                                                            <option value="">Select Days</option>
                                                            {days.map((d) => (
                                                                <option key={d.id} value={d.id}>{d.day_name}</option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <div className="col-md-2">
                                                        <label htmlFor="shift_id">Shift</label>
                                                    </div>
                                                    <div className="col-md-10 form-group">
                                                        <select name="shift_id" onChange={handleChange} value={inputs.shift_id}>
                                                            <option value="">Select Shift</option>
                                                            {shifts.map((s) => (
                                                                <option key={s.id} value={s.id}>{s.shift_name}</option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <div className="col-md-2">
                                                        <label htmlFor="status">Status</label>
                                                    </div>
                                                    <div className="col-md-10 form-group">
                                                        <input type="number" name="status" value={inputs.status} onChange={handleChange} />
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

export default ScheduleAdd;
