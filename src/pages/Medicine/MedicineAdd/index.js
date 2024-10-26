import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function MedicineAdd() {
    const [inputs, setInputs] = useState({id: '', medicine_cat_id: '', medicine_name:'', dosage:''});
    const [medicinecat, setMedicinecat] = useState([]);
    const navigate=useNavigate();
    const {id} = useParams();
    
    const getDatas = async (e)=>{
        let response = await axios.get(`/medicine/${id}`)
            setInputs(response.data.data);
       
    }
    const getRelational = async (e) => {
        let roles = await axios.get(`/medicinecat/index`)
        setMedicinecat(roles.data.data);
        
    }
    useEffect(() => {
        if(id){
            getDatas();
        }
        getRelational()
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(inputs)
        
        try{
            let apiurl='';
            if(inputs.id!=''){
                apiurl=`/medicine/${inputs.id}`;
            }else{
                apiurl=`/medicine/create`;
            }
            
            let res = await axios.post(apiurl, inputs)
            console.log(res);
            navigate('/medicine')
        }
        catch (e) {
            console.log(e);
        }
    }
  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 order-last">
                        <h3>Add New Medicine </h3>
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
                                <div className="col-md-3">
                                    <label >Medicine Categories</label>
                                </div>
                                {medicinecat.length > 0 && 
                                                        <select className="form-control" id="medicine_cat_id" name='medicine_cat_id' defaultValue={inputs.medicine_cat_id} onChange={handleChange}>
                                                            <option value="">Select Designation</option>
                                                            {medicinecat.map((d, key) =>
                                                                <option value={d.id}>{d.medicine_cat_name}</option>
                                                            )}
                                                        </select>
                                                    }
                                <div className="col-md-3">
                                    <label >Medicine </label>
                                </div>
                                <div className="col-md-9 form-group">
                                    <input type="text" id="medicine_name" className="form-control" name="medicine_name" defaultValue={inputs.medicine_name}  onChange={handleChange}  placeholder="Input Medicine Categories Name.."/>
                                </div>
                               
                                <div className="col-md-3">
                                    <label>Dosage</label>
                                </div>
                                <div className="col-md-9 form-group">
                                    <input type="text" id="dosage" className="form-control" name="dosage" defaultValue={inputs.dosage}  onChange={handleChange} placeholder="Status"/>
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

export default MedicineAdd