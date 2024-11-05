
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Schedule() {
    const [schedules, setSchedules] = useState([]);
    const [day, setDays] = useState([]);
    const [shift, setShifts] = useState([]);
    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [schedulesResponse, daysResponse, shiftsResponse, doctorResponse] = await Promise.all([
                    axios.get(`${process.env.REACT_APP_API_URL}/schedule/index`),
                    axios.get(`${process.env.REACT_APP_API_URL}/day/index`),
                    axios.get(`${process.env.REACT_APP_API_URL}/shift/index`),
                    axios.get(`${process.env.REACT_APP_API_URL}/doctor/index`)
                ]);
                
                setSchedules(schedulesResponse.data.data);
                setDays(daysResponse.data.data);
                setShifts(shiftsResponse.data.data);
                setDoctor(doctorResponse.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const deleteData = async (id) => {
                try {
                    await axios.delete(`${process.env.REACT_APP_API_URL}/schedule/${id}`);
                    setSchedules(prev => prev.filter(s => s.id !== id)); // Remove from state after deletion
                } catch (error) {
                    console.error("Error deleting schedule:", error);
                }
            };

    return (
        <AdminLayout>
            <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-12 col-md-6 order-md-1 order-last">
                            <h3>Hospital Schedule</h3>
                        </div>
                        <div className="col-12 col-md-6 order-md-2 order-first">
                            <nav aria-label="breadcrumb" className='breadcrumb-header'>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Schedule</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Doctors/Shift</th>
                                {shift.map(shift => (
                                    <th key={shift.id}>{shift.shift_name}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {doctor.map(doctor => (
                                <tr key={doctor.id}>
                                    <td>{doctor.name}</td>
                                    {shift.map(shift => (
                                        <td key={shift.id}>
                                            {day.map(day => {
                                                const scheduled = schedules.find(s => s.day_id === day.id && s.shift_id === shift.id && s.doctor_id === doctor.id);
                                                return (
                                                    <div key={day.id}>
                                                        {scheduled ? day.day_name : 'day'}
                                                    </div>
                                                );
                                            })}
                                        </td>
                                       
                                    ))}
                                     <td>
                                            <Link to={`/schedule/edit/${s=>s.id}`} className='btn btn-info'>
                                                Edit
                                            </Link>
                                            <button type='button' onClick={() => deleteData(s=>s.id)} className='btn btn-outline-danger'>
                                                Delete
                                            </button>
                                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Schedule;

