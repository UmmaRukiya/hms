import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function PatientBillAdd() {
    const [inputs, setInputs] = useState({id: '', patient_id:'', sub_amount:'', discount:'', tax:'', total_amount:'', bill_date:''});
    
    const [items, setItems] = useState([]);
    const [patient, setPatient] = useState([]);
    const [cartitems, setCartItems] = useState([]);
    const [totalData, setTotalData] = useState({total:0,discount:0,tax:0,totalUnit:0, finalTotal:0});
    const navigate=useNavigate();
    const {id} = useParams();

    const getRoomList= async(e) =>{
        axios.get(`${process.env.REACT_APP_API_URL}/roomlist/index`).then(function(response) {
            setItems(response.data.data);
        });
    }
    const getPatient= async(e) =>{
        axios.get(`${process.env.REACT_APP_API_URL}/patient/index`).then(function(response) {
            setPatient(response.data.data);
        });
    }
    const handleOnSelect = (item) => {
        // the item selected
        setCartItems(val=>[...val,item]);
      }
    //autocomplete design
      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
          </>
        )
      }  
      // 
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/patientbill/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }

    useEffect(() => {
        if(id){
            getDatas();
        }
        getRoomList();
        getPatient();
        handleTotalcal();
    }, [cartitems]);


    const handleCartChange = (event,data) => {
        const name = event.target.name;
        const value = event.target.value;
        let unit=data.unit ?? 0;
        if(name=="unit"){
            unit=value;
        }
        let price=data.price
        if(name=="price"){
            price=value;
        }
        let subtotal= unit * price;
        const newdata={...data,['unit']:unit,['subtotal']:subtotal,['price']:price}
        
        setCartItems(prevItems=>{
            const itemExists=prevItems.some(item=>item.id===newdata.id);
            if(itemExists){
                return prevItems.map(item=>
                    item.id===newdata.id ? {...item, ...newdata}:item
                );
            }
        })
    }
    const sumTotal = async (key)=>{
        return cartitems.reduce((acc,item)=>{
            let sum=acc+(item[key] || 0);
            if(item.children && Array.isArray(item.children)){
                sum += sumTotal(item.children,key);
            }
            return sum;
        },0);
    }
    const handleTotalChange = async (e)=>{
        let total=await sumTotal('subtotal');
        let totalUnit=await sumTotal('unit');
        const name = e.target.name;
        const value = e.target.value;
        let finalTotal=0;
        let tax=totalData.tax ?? 0;
        if(name=="tax"){
            tax=value;
        }

        let discount=totalData.discount
        if(name=="discount"){
            discount=value;
        }
        // let discountAmt= (total * (discount/100));
        // finalTotal = total - discountAmt;
        // let taxAmt=  (finalTotal * (tax/100));
        // finalTotal = finalTotal + taxAmt;

        setTotalData(values => ({...values, ['total']: total, ['discount']: discount, ['tax']: tax,  ['totalUnit']: totalUnit, ['finalTotal']: finalTotal}))
    }

    const handleTotalcal = async ()=>{
        let total=await sumTotal('subtotal');
        let totalUnit=await sumTotal('unit');
        let finalTotal=0;
        let tax=totalData.tax ?? 0;
        let discount=totalData.discount
        // let discountAmt= (total * (discount/100));
        // finalTotal = total - discountAmt;
        // let taxAmt=  (finalTotal * (tax/100));
        // finalTotal = finalTotal + taxAmt;
        
        setTotalData(values => ({...values, ['total']: total, ['discount']: discount, ['tax']: tax, ['totalUnit']: totalUnit, ['finalTotal']: finalTotal}))
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(inputs)
        let obj={
            input:inputs,
            cartitems:cartitems,
            totalData:totalData,
        }
        try{
            let apiurl=`/patientbill/create`;//api from laravel
            // let apiurl='';
            // if(inputs.id!=''){
            //     apiurl=`/patientbill/${inputs.id}`;
            // }else{
            //     apiurl=`/patientbill/create`;
            // }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/patientbill');  // route from app.js
        } 
        catch(e){
            console.log(e);
        }
    }
  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 order-last">
                        <h3>Add New Bill</h3>
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
                                                <div className="col-md-1">
                                                    <label >Patient :</label>
                                                </div>
                                                <div className="col-md-3 form-group">
                                                    {patient.length > 0 && 
                                                        <select className="form-control" id="patient_id" name='patient_id' defaultValue={inputs.patient_id} onChange={handleChange}>
                                                            <option value="">Select Patient</option>
                                                            {patient.map((d, key) =>
                                                                <option value={d.id}>{d.name}</option>
                                                            )}
                                                        </select>
                                                    }
                                                </div>
                                                <div className="col-md-3"> </div>
                                                <div className="col-md-1">
                                                    <label>Bill Date :</label>
                                                </div>
                                                <div className="col-md-3 form-group">
                                                    <input type="date" id="bill_date" className="form-control" name="bill_date" defaultValue={inputs.bill_date}  onChange={handleChange} />
                                                </div>
                                               <div className='col-md-10'>
                                                <label>Room:</label>
                                                    <ReactSearchAutocomplete items={items} onSelect={handleOnSelect} autoFocus formatResult={formatResult} />
                                               </div>
                                                <div className='row'>
                                                    <table className='mt-3 table table-bordered' >
                                                        <tr style={{ backgroundColor: '#e9ecef', fontWeight: 'bold' }}>
                                                            <td>Paticulars</td>
                                                            <td>Unit</td>
                                                            <td>Price</td>
                                                            <td>Total</td>
                                                        </tr>
                                                        {Object.keys(cartitems).map(k => ({id: k, ...cartitems[k]})).map(d => (
                                                            <tr key={d.id}>
                                                                <td>{d.particulars}</td>
                                                                <td>
                                                                    <input className='form-control' type="text" name="unit" onChange={(e)=>handleCartChange(e,d)} />
                                                                </td>
                                                                <td>
                                                                    <input className='form-control' type="text" name="price" defaultValue={d.price} onChange={(e)=>handleCartChange(e,d)} />
                                                                </td>
                                                                <td>
                                                                    {d.subtotal}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </table>
                                                </div>
                                                <div className='row'> 
                                                    <div className="col-6 offset-6 d-flex justify-content-end">
                                                        <table className='my-3 table table-bordered'>
                                                            <tr>
                                                                <td style={{ fontWeight: 'bold' }}>Total:</td>
                                                                <td>{totalData.sub_amount}</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ fontWeight: 'bold' }}>Discount:</td>
                                                                <td><input className='form-control' type="text" defaultValue={totalData.discount} name="discount" onChange={(e)=>handleTotalChange(e)} /></td>
                                                                {/* <td>{totalData.discountAmt}</td> */}
                                                            </tr>
                                                            <tr>
                                                                <td style={{ fontWeight: 'bold' }}>Tax:</td>
                                                                <td><input className='form-control' type="text" defaultValue={totalData.tax} name="tax" onChange={(e)=>handleTotalChange(e)} /></td>
                                                                {/* <td>{totalData.taxAmt}</td> */}
                                                            </tr>
                                                            <tr>
                                                                <td style={{ fontWeight: 'bold' }}>Grand Total:</td>
                                                                <td></td>
                                                                <td>{totalData.finalTotal}</td>
                                                            </tr>
                                                        </table>
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
  )
}

export default PatientBillAdd