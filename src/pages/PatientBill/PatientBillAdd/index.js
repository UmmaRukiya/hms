
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';

function PatientBillAdd() {
    const { admit_id, patient_id, billid, testid } = useParams();
    const [inputs, setInputs] = useState({ id: '', patient_id: patient_id, admit_id: '', sub_amount: '0', discount: 0, tax: 0, bill_date: '' });
    const [patients, setPatients] = useState([]);
    const [patientadmit, setPatientAdmit] = useState(null);
    const [testdata, setTestData] = useState([]);
    const [paid, setPaid] = useState(0); // Changed to a single number, not an array
    const [cartItems, setCartItems] = useState([]);
    const [totalData, setTotalData] = useState({ total: 0, discountAmount: 0, taxAmount: 0, finalTotal: 0 });
    const navigate = useNavigate();

    useEffect(() => {
        PatientList();
        if (billid) {
            BillData();
        }
        if (admit_id) {
            AdmitDetails();
        }
    }, [admit_id, billid, testid]);

     // Fetch patient list
    const PatientList = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/patient/index`);
        setPatients(response.data.data);
    };

    // Fetch patient admit details
    // const AdmitDetails = async () => {
    //     const response = await axios.get(`${process.env.REACT_APP_API_URL}/patientadmit/billdetails/${admit_id}`);
    //     TestData(response.data.data);
    // };

    const AdmitDetails = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/patientadmit/billdetails/${admit_id}`);
        const data = response.data.data;
        setPatientAdmit(data);
        // Set the bill date automatically based on admit date or any other logic
        if (data) {
            setInputs(prevState => ({
                ...prevState,
                bill_date: data.release_date // Assuming admit_date is the desired date
            }));
        }
        TestData(response.data.data);
    };

    const TestData = async (data) => {
        let testdatas = [];
        let testpay = 0;
        testdatas.push({ id: 1, name: `Room Charge (${data.admit_date} - ${data.release_date})`, price: calculateRoomCost(data.admit_date, data.release_date, data.roomlist.room_cat.price) });
        const resDatas = data.test?.map(d => {
            testpay += d.paid ? parseFloat(d.paid) : 0;
            for (const k in d.details) {
                if (d.details[k]) {
                    testdatas.push({ id: d.details[k].id, name: d.details[k].investlist.invest_name, price: parseFloat(d.details[k].amount) });
                } else {
                    return null;
                }
            }
        }).filter(item => item !== null);
        setPaid(testpay);  // Correct the paid amount
        setTestData(testdatas);
        calculateTotals(testdatas);
    };

    const BillData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/patientbill/${billid}`);
        setInputs(response.data.data);
        setCartItems(response.data.cartItems || []);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(prev => {
            const updatedInputs = { ...prev, [name]: value };
            calculateTotals(cartItems, updatedInputs.discount, updatedInputs.tax);
            return updatedInputs;
        });
    };

    const calculateRoomCost = (admitDate, releaseDate, roomPrice) => {
        const admit = new Date(admitDate);
        const release = new Date(releaseDate);
        const diffTime = Math.abs(release - admit);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // calculate days
        return roomPrice * diffDays;
    };

    const calculateInvestigation = () => {
        return testdata.reduce((total, item) => total + item.price, 0);
    };

    const calculateTotals = (cartItems, discount = 0, tax = 0) => {
        const itemsTotal = cartItems.reduce((acc, item) => acc + (item.price || 0), 0); // Assuming cartItems have `price`

        const total = itemsTotal + calculateInvestigation();
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
                input: { ...inputs, sub_amount: totalData.total, total_amount: totalData.finalTotal, paid: inputs.paid },
                testdata
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
                                                        {patient_id ?
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
                                                        {patientadmit ?
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

                                                            {testdata.length > 0 && (
                                                                testdata.map((test, index) => (
                                                                    <tr key={index}>
                                                                        <td>{test.name}</td>
                                                                        <td>{test.price.toFixed(2)}</td>
                                                                    </tr>
                                                                ))
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
                                                                <td colSpan={2}></td>
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
                                                                <td colSpan={2}></td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ fontWeight: 'bold' }}>Due:</td>
                                                                <td>{(totalData.finalTotal - paid).toFixed(2)}</td>
                                                                <td colSpan={2}></td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ fontWeight: 'bold' }}>Pay:</td>
                                                                <td><input type="number" className="form-control" defaultValue={inputs.paid} name="paid" onChange={handleChange} /></td>
                                                                <td colSpan={2}></td>
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

