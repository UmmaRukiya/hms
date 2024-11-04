import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';

function PatientBillAdd() {
    const [inputs, setInputs] = useState({ id: '', patient_id: '', sub_amount:'0', discount: 0, tax: 0, bill_date: '' });
    // const [patients, setPatients] = useState([]);
    const [bill, setPatientadmit] = useState([]);
    const [madiCarts, setMadiCarts] = useState([]);
    const [totalData, setTotalData] = useState({ total: 0, discountAmount: 0, taxAmount: 0, finalTotal: 0 });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        PatientList();
        if (id) {
            BillData();
        }
    }, [id]);

    const PatientList = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/patientadmit/index`);
        setPatientadmit(response.data.data);
    };

    const BillData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/patientbill/${id}`);
        setInputs(response.data.data);
        setMadiCarts(response.data.madiCarts || []);
        calculateTotals(response.data.madiCarts || [], response.data.data.discount, response.data.data.tax);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
        calculateTotals(madiCarts, name === 'discount' ? value : inputs.discount, name === 'tax' ? value : inputs.tax); // Calculate based on changed field
    };

    const handleCartChange = (event, item) => {
        const { name, value } = event.target;
        const updatedItem = { ...item, [name]: parseFloat(value) || 0 };
        updatedItem.sub_total = updatedItem.unit * updatedItem.price; // Update subtotal based on unit and price
        setMadiCarts((prev) => prev.map((i) => (i.id === updatedItem.id ? updatedItem : i)));
        calculateTotals(madiCarts, inputs.discount, inputs.tax); // Recalculate totals
    };

    const addMadiCart= () => {
        setMadiCarts((prev) => [...prev, { id: Date.now(), particulars: '', unit: 1, price: '', sub_total: 0 }]);
    };

    const calculateTotals = (items, discount = 0, tax = 0) => {
        const total = items.reduce((acc, item) => acc + (item.sub_total || 0), 0);
        const discountAmount = (parseFloat(discount) / 100) * total; // Calculate discount as percentage
        const taxableAmount = total - discountAmount; // Calculate amount after discount
        const taxAmount = (parseFloat(tax) / 100) * taxableAmount; // Calculate tax on the discounted amount
        const finalTotal = total - discountAmount + taxAmount; // Calculate final total

        setTotalData({
            total,
            discountAmount,
            taxAmount,
            finalTotal,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/patientbill/create`, {
                input: { ...inputs, total_amount: totalData.finalTotal },
                madiCarts,
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
                                                    <div className="col-md-4">
                                                        {bill && 
                                                            <>
                                                                <h3><label>Patient Name:</label> {bill?.name}</h3>
                                                                <h3><label>Bill Date:</label> {bill?.bill_date}</h3>
                                                               
                                                            </>
                                                        }
                                                    </div>
                                                    {/* <div className="col-md-1">
                                                        <label>Bill Date:</label>
                                                    </div>
                                                    <div className="col-md-3 form-group">
                                                        <input type="date" className="form-control" name="bill_date" value={inputs.bill_date} onChange={handleChange} />
                                                    </div> */}
                                                </div>

                                                <div className='row'>
                                                    <table className='mt-3 table table-bordered'>
                                                        <thead>
                                                            <tr style={{ backgroundColor: '#e9ecef', fontWeight: 'bold' }}>
                                                                <th>Particulars</th>
                                                                <th>Unit</th>
                                                                <th>Price</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {madiCarts.map((item) => (
                                                                <tr key={item.id}>
                                                                    <td>
                                                                        <input 
                                                                            className='form-control' 
                                                                            type="text" 
                                                                            value={item.particulars} 
                                                                            onChange={(e) => handleCartChange(e, { ...item, particulars: e.target.value })} 
                                                                        />
                                                                    </td>
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
                                                                            onChange={(e) => handleCartChange(e, { ...item, price: parseFloat(e.target.value) })} 
                                                                        />
                                                                    </td>
                                                                    <td>{item.sub_total.toFixed(2)}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    <button type="button" className="btn btn-secondary" onClick={addMadiCart}>Add Item</button>
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
                                                                        name="tax" 
                                                                        value={inputs.tax} 
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
