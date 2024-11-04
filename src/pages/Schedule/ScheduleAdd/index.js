import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';

function ScheduleAdd() {
    const [inputs, setInputs] = useState({ id: '', employe_id: '', day_id: '', shift_id: '', status: '' });
    const [employe, setEmploye] = useState([]);
    const [day, setDay] = useState([]);
    const [shift, setShift] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [shiftResponse, dayResponse, employeeResponse] = await Promise.all([
                    axios.get(`${process.env.REACT_APP_API_URL}/shift/index`),
                    axios.get(`${process.env.REACT_APP_API_URL}/day/index`),
                    axios.get(`${process.env.REACT_APP_API_URL}/employe/index`)
                ]);
                setShift(shiftResponse.data.data);
                setDay(dayResponse.data.data);
                setEmploye(employeeResponse.data.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let apiurl = inputs.id ? `/schedule/edit/${inputs.id}` : '/schedule/create';

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}${apiurl}`, inputs);
            navigate('/schedule');
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

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="employe_id">Employee</label>
                        <select name="employe_id" onChange={handleChange} value={inputs.employe_id}>
                            <option value="">Select Employee</option>
                            {employe.map((employe) => (
                                <option key={employe.id} value={employe.id}>{employe.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="day_id">Day</label>
                        <select name="day_id" onChange={handleChange} value={inputs.day_id}>
                            <option value="">Select Day</option>
                            {day.map((d) => (
                                <option key={d.id} value={d.id}>{d.day_name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="shift_id">Shift</label>
                        <select name="shift_id" onChange={handleChange} value={inputs.shift_id}>
                            <option value="">Select Shift</option>
                            {shift.map((s) => (
                                <option key={s.id} value={s.id}>{s.shift_name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="status">Status</label>
                        <input type="number" name="status" value={inputs.status} onChange={handleChange} placeholder="Room Available or Not..." />
                    </div>
                    <div>
                        <button type="submit">Add Schedule</button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

export default ScheduleAdd;
