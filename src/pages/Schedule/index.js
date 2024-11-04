// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminLayout from '../../layouts/AdminLayout';
// import { Link } from 'react-router-dom';

// function Schedule() {
//     const [schedule, setSchedule] = useState([]);

//     useEffect(() => {
//         const fetchSchedules = async () => {
//             try {
//                 const response = await axios.get(`${process.env.REACT_APP_API_URL}/schedule/index`);
//                 setSchedule(response.data.data); // Adjust based on your API response structure
//             } catch (error) {
//                 console.error("Error fetching schedules:", error);
//             }
//         };
//         fetchSchedules();
//     }, []);

//     const deleteData = async (id) => {
//         try {
//             await axios.delete(`${process.env.REACT_APP_API_URL}/schedule/${id}`);
//             setSchedule(prev => prev.filter(s => s.id !== id)); // Remove from state after deletion
//         } catch (error) {
//             console.error("Error deleting schedule:", error);
//         }
//     };

//     return (
//         <AdminLayout>
//             <div className="main-content container-fluid">
//                 <div className="page-title">
//                     <div className="row">
//                         <div className="col-12 col-md-6 order-md-1 order-last">
//                             <h3>Schedule</h3>
//                         </div>
//                         <div className="col-12 col-md-6 order-md-2 order-first">
//                             <nav aria-label="breadcrumb" className='breadcrumb-header'>
//                                 <ol className="breadcrumb">
//                                     <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
//                                     <li className="breadcrumb-item active" aria-current="page">List</li>
//                                 </ol>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row" id="table-bordered">
//                     <div className="col-12">
//                         <div className="card">
//                             <div className="card-header">
//                                 <h4 className="card-title">All Schedule</h4>
//                                 <Link to={'/schedule/add'} className='btn btn-primary float-right'>Add New</Link>
//                             </div>
//                             <div className="card-content">
//                                 <div className="table-responsive">
//                                     <table className="table table-bordered mb-0">
//                                         <thead>
//                                             <tr>
//                                                 <th>Employee</th>
//                                                 <th>Day</th>
//                                                 <th>Shift</th>
//                                                 <th>Status</th>
//                                                 <th>Action</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {schedule.map((s) => (
//                                                 <tr key={s.id}>
//                                                     <td>{s.employe?.name}</td>
//                                                     <td>{s.day?.day_name}</td>
//                                                     <td>{s.shift?.shift_name}</td>
//                                                     <td>{s.status}</td>
//                                                     <td>
//                                                         <Link to={`/schedule/edit/${s.id}`} className='btn btn-info'>
//                                                             Edit
//                                                         </Link>
//                                                         <button type='button' onClick={() => deleteData(s.id)} className='btn btn-outline-danger'>
//                                                             Delete
//                                                         </button>
//                                                     </td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AdminLayout>
//     );
// }

// export default Schedule;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Schedule() {
    const [schedules, setSchedules] = useState([]);
    const [day, setDays] = useState([]);
    const [shift, setShifts] = useState([]);
    const [employe, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [schedulesResponse, daysResponse, shiftsResponse, employeesResponse] = await Promise.all([
                    axios.get(`${process.env.REACT_APP_API_URL}/schedule/index`),
                    axios.get(`${process.env.REACT_APP_API_URL}/day/index`),
                    axios.get(`${process.env.REACT_APP_API_URL}/shift/index`),
                    axios.get(`${process.env.REACT_APP_API_URL}/employe/index`)
                ]);
                
                setSchedules(schedulesResponse.data.data);
                setDays(daysResponse.data.data);
                setShifts(shiftsResponse.data.data);
                setEmployees(employeesResponse.data.data);
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
                                <th>Days</th>
                                {shift.map(shift => (
                                    <th key={shift.id}>{shift.shift_name}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {day.map(day => (
                                <tr key={day.id}>
                                    <td>{day.day_name}</td>
                                    {shift.map(shift => (
                                        <td key={shift.id}>
                                            {employe.map(employe => {
                                                const scheduled = schedules.find(s => s.day_id === day.id && s.shift_id === shift.id && s.employe_id === employe.id);
                                                return (
                                                    <div key={employe.id}>
                                                        {scheduled ? employe.name : 'Free'}
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

