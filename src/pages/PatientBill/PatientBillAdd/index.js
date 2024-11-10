import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';

function PatientBillAdd() {
    const { admit_id, patient_id, billid, testid } = useParams();
    const [inputs, setInputs] = useState({ id: '', patient_id: patient_id, sub_amount: '0', discount: 0, tax: 0, bill_date: '' });
    const [patients, setPatients] = useState([]);
    // const [roomlist, setRoomList] = useState([]);
    const [patientadmit, setPatientAdmit] = useState(null);
    const [testdata, setTestData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [totalData, setTotalData] = useState({ total: 0, discountAmount: 0, taxAmount: 0, finalTotal: 0 });
    const navigate = useNavigate();

    useEffect(() => {
        PatientList();
        TestData();
        // RoomList();
        if (billid) {
            BillData();
        }
        if (admit_id) {
            AdmitDetails();
        }
        if (testid) {
            TestData();
        }
    }, [testid, billid, admit_id]);

    const PatientList = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/patient/index`);
        setPatients(response.data.data);
    };

    const AdmitDetails = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/patientadmit/billdetails/${admit_id}`);
        setPatientAdmit(response.data.data);
    };

    const TestData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/patienttest/index`);
        const resDatas = response.data.data.map(d => ({ id: d.id, name: d.investlist, price: d.amount }));
        setTestData(resDatas);
        console.log(resDatas)
    };

    // const RoomList = async () => {
    //     const response = await axios.get(`${process.env.REACT_APP_API_URL}/roomlist/index`);
    //     const resDatas = response.data.data.map(d => ({ id: d.id, name: d.roomlist?.room_cat.room_cat_name, price: d.roomlist?.room_cat.price }));
    //     setRoomList(resDatas);
    // };

    const BillData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/patientbill/${billid}`);
        setInputs(response.data.data);
        setCartItems(response.data.cartItems || []);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(prev => ({ ...prev, [name]: value }));
        calculateTotals(cartItems, name === 'discount' ? value : inputs.discount, name === 'tax' ? value : inputs.tax);
    };

    // const handleCartChange = (event, item) => {
    //     const { name, value } = event.target;
    //     const updatedItem = { ...item, [name]: parseFloat(value) || 0 };
    //     updatedItem.sub_total = updatedItem.unit * updatedItem.price;
    //     setCartItems(prev => prev.map(i => i.id === updatedItem.id ? updatedItem : i));
    //     calculateTotals(cartItems, inputs.discount, inputs.tax);
    // };

    // const addMadiCart = (event) => {
    //     event.preventDefault();
    //     const newItem = { id: Date.now(), particulars: '', price: '', sub_total: 0 };
    //     setCartItems(prev => [...prev, newItem]);
    // };

    const calculateRoomCost = (admitDate, releaseDate, roomPrice) => {
        const admit = new Date(admitDate);
        const release = new Date(releaseDate);
        const diffTime = Math.abs(release - admit);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // calculate days
        return roomPrice * diffDays;
    };


    const calculateInvestigation= ( investPrice) =>{
        return investPrice;
    }
    const calculateTotals = (discount = 0, tax = 0) => {
        const roomCost = patientadmit ? calculateRoomCost(patientadmit.admit_date, patientadmit.release_date, patientadmit.room_price) : 0;
        const items=roomCost;
        const total = items.reduce((acc, item) => acc + (item.sub_total || 0), 0) + roomCost;
        const discountAmount = (parseFloat(discount) / 100) * total;
        const taxableAmount = total - discountAmount;
        const taxAmount = (parseFloat(tax) / 100) * taxableAmount;
        const finalTotal = total - discountAmount + taxAmount;

        setTotalData({
            total,
            discountAmount,
            taxAmount,
            finalTotal
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/patientbill/create`, {
                input: { ...inputs, total_amount: totalData.finalTotal },
                cartItems
            });
            navigate('/patientbill');
        } catch (error) {
            console.error("Error submitting bill:", error);
        }
    };

    return (
        <AdminLayout>
            <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h3>Add New Bill</h3>
                        </div>
                        <div className="col-12 col-md-6">
                            <nav aria-label="breadcrumb">
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
                                                    <div className="col-md-1">
                                                        <label>Patient:</label>
                                                    </div>
                                                    <div className="col-md-3">
                                                        { patient_id ? 
                                                            <>{patients.find(data => data.id == patient_id)?.name}</> 
                                                            : 
                                                            <select className="form-control" name='patient_id' value={inputs.patient_id} onChange={handleChange}>
                                                                <option value="">Select Patient</option>
                                                                {patients.map((patient) => (
                                                                    <option key={patient.id} value={patient.id}>{patient.name}</option>
                                                                ))}
                                                            </select>
                                                        }
                                                    </div>

                                                    <div className="col-md-1">
                                                        <label>Bill Date:</label>
                                                    </div>
                                                    <div className="col-md-3 form-group">
                                                        { patientadmit ?
                                                            <>{patientadmit.release_date}</>
                                                            :
                                                            <input type="date" id="bill_date" className="form-control" name="bill_date" value={inputs.bill_date} onChange={handleChange} />
                                                        }
                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <table className='mt-3 table table-bordered'>
                                                        <thead>
                                                            <tr style={{ backgroundColor: '#e9ecef', fontWeight: 'bold' }}>
                                                                <th>Particulars</th>
                                                                <th>Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {cartItems.map((item) => (
                                                                <tr key={item.id}>
                                                                    <td>{item.particulars}</td>
                                                                    <td>{item.price}</td>
                                                                </tr>
                                                            ))}
                                                            {patientadmit && (
                                                                <tr key="room-charge">
                                                                    <td>Room Charge ({patientadmit.admit_date} - {patientadmit.release_date})</td>
                                                                    <td>{calculateRoomCost(patientadmit.admit_date, patientadmit.release_date, patientadmit.roomlist.room_cat.price).toFixed(2)}</td>
                                                                </tr>
                                                            )}
                                                            {testdata && (
                                                                <tr key="test">
                                                                    <td>Investigations Charge </td>
                                                                    <td>{calculateInvestigation(testdata.total_amount)}</td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="col-12 d-flex justify-content-end">
                                                    <table className='my-3 table table-bordered'>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ fontWeight: 'bold' }}>Total:</td>
                                                                <td>{totalData.total.toFixed(2)}</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ fontWeight: 'bold' }}>Discount (%):</td>
                                                                <td>
                                                                    <input className='form-control' type="number" name="discount" value={inputs.discount} onChange={handleChange} />
                                                                </td>
                                                                <td style={{ fontWeight: 'bold' }}>Discount Amount:</td>
                                                                <td>{totalData.discountAmount.toFixed(2)}</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ fontWeight: 'bold' }}>Tax (%):</td>
                                                                <td>
                                                                    <input className='form-control' type="number" name="tax" value={inputs.tax} onChange={handleChange} />
                                                                </td>
                                                                <td style={{ fontWeight: 'bold' }}>Tax Amount:</td>
                                                                <td>{totalData.taxAmount.toFixed(2)}</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ fontWeight: 'bold' }}>Grand Total:</td>
                                                                <td>{totalData.finalTotal.toFixed(2)}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="col-12 d-flex justify-content-end">
                                                    <button type="submit" className="btn btn-primary mr-1 mb-1">Submit</button>
                                                    <button type="reset" className="btn btn-light-secondary mr-1 mb-1">Reset</button>
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

export default PatientBillAdd;