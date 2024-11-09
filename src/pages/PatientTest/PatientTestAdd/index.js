import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function PatientTestAdd() {
    const [inputs, setInputs] = useState({ id: '', patient_id: '', admit_id: '', discount: 0, vat: 0, total_amount: '', paid: '' });
    const [patients, setPatients] = useState([]);
    const [patientAdmit, setPatientAdmit] = useState([]);
    const [investList, setInvestList] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [scartItems, setsCartItems] = useState([]);
    const [totalData, setTotalData] = useState({ total: 0, discountAmount: 0, vatAmount: 0, finalTotal: 0 });
    const navigate = useNavigate();
    const { id } = useParams();

    const formatResult = (item) => {
        return (<><span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span></>)
    }

    useEffect(() => {
        fetchPatientList();
        fetchPatientAdmitList();
        fetchInvestList();
        calculateTotals();
        if (id) {
            fetchTestData();
        }
    }, [id,cartItems]);

    const fetchPatientList = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/patient/index`);
        setPatients(response.data.data);
    };

    const fetchPatientAdmitList = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/patientadmit/index`);
        setPatientAdmit(response.data.data);
    };

    const fetchInvestList = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/investlist/index`);
        let resDatas=[];
        if(response.data){
            response.data.data?.map((d) => (
                resDatas.push({id:d.id,name:d.invest_name,unit:1,price:d.price})
            ))
        }
        setInvestList(resDatas);
        console.log(resDatas)
    };

    const fetchTestData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/patienttest/${id}`);
        setInputs(response.data.data);
        setCartItems(response.data.cartItems || []);
        calculateTotals(response.data.cartItems || [], response.data.data.discount, response.data.data.vat);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prev) => ({ ...prev, [name]: value }));


        calculateTotals(name === 'discount' ? value : inputs.discount, name === 'vat' ? value : inputs.vat);
    };
    
    const handleCartChange = (event) => {

        let selectedInvestigation = cartItems.find(invest => invest.id === event.id);
        
        if(!selectedInvestigation){
            event={ ...event, sub_total: (event.price * event.unit) }
            setCartItems([ ...cartItems, event ])
        }

        calculateTotals(inputs.discount, inputs.vat);
    };

    const calculateTotals = (discount = 0, vat = 0) => {
        const items=cartItems;
        const total = items.reduce((acc, item) => acc + (item.sub_total || 0), 0);
        const discountAmount = (parseFloat(discount) / 100) * total; 
        const vatableAmount = total - discountAmount; 
        const vatAmount = (parseFloat(vat) / 100) * vatableAmount; 
        const finalTotal = total - discountAmount + vatAmount; 

        setTotalData({
            total,
            discountAmount,
            vatAmount,
            finalTotal,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const allInvestigationsSelected = cartItems.every(item => item.investigations);
        if (!allInvestigationsSelected) {
            alert("Please select investigations for all cart items.");
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/patienttest/create`, {
                input: { ...inputs, total_amount: totalData.finalTotal },
                cartItems,
            });
            navigate('/patienttest'); 
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
                            <h3>Add Patient Test</h3>
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
                                                    <div className="col-md-3 form-group">
                                                        <select className="form-control" name='patient_id' value={inputs.patient_id} onChange={handleChange}>
                                                            <option value="">Select Patient</option>
                                                            {patients.map((patient) => (
                                                                <option key={patient.id} value={patient.id}>{patient.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <label>Admit No:</label>
                                                    </div>
                                                    <div className="col-md-3 form-group">
                                                        <select className="form-control" name='admit_id' value={inputs.admit_id} onChange={handleChange}>
                                                            <option value="">Select Admit No</option>
                                                            {patientAdmit.map((admit) => (
                                                                <option key={admit.id} value={admit.id}>{admit.id}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-12'>
                                                        {investList && 
                                                            <ReactSearchAutocomplete
                                                                items={investList}
                                                                onSelect={handleCartChange}
                                                                autoFocus
                                                                formatResult={formatResult}
                                                            />
                                                        }
                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <table className='mt-3 table table-bordered'>
                                                        <thead>
                                                            <tr style={{ backgroundColor: '#e9ecef', fontWeight: 'bold' }}>
                                                                <th>Investigations</th>
                                                                <th>Unit</th>
                                                                <th>Price</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {cartItems.map((item) => (
                                                                <tr key={item.id}>
                                                                    <td>{item.name}</td>
                                                                    <td>
                                                                        <input 
                                                                            className='form-control' 
                                                                            type="number" 
                                                                            name="unit" 
                                                                            value={item.unit} 
                                                                            onChange={(e) => handleCartChange(e, { ...item, unit: parseFloat(e.target.value) })} 
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <input 
                                                                            className='form-control' 
                                                                            type="number" 
                                                                            name="price" 
                                                                            value={item.price} 
                                                                            readOnly // Make price read-only, calculated from selected investigation
                                                                        />
                                                                    </td>
                                                                    <td>{item.sub_total?.toFixed(2)}</td>
                                                                </tr>
                                                            ))}
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
                                                                    <input 
                                                                        className='form-control' 
                                                                        type="number" 
                                                                        name="discount" 
                                                                        value={inputs.discount} 
                                                                        onChange={handleChange} 
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ fontWeight: 'bold' }}>Tax (%):</td>
                                                                <td>
                                                                    <input 
                                                                        className='form-control' 
                                                                        type="number" 
                                                                        name="vat" 
                                                                        value={inputs.vat} 
                                                                        onChange={handleChange} 
                                                                    />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ fontWeight: 'bold' }}>Discount Amount:</td>
                                                                <td>{totalData.discountAmount.toFixed(2)}</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ fontWeight: 'bold' }}>Tax Amount:</td>
                                                                <td>{totalData.vatAmount.toFixed(2)}</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ fontWeight: 'bold' }}>Grand Total:</td>
                                                                <td>{totalData.finalTotal.toFixed(2)}</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ fontWeight: 'bold' }}>Paid:</td>
                                                                <td> <input type="number" className="form-control" defaultValue={inputs.paid} name="paid" onChange={handleChange}/></td>
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

export default PatientTestAdd;
