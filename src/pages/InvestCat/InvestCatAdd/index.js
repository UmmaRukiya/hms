import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function InvestCatAdd() {
    const [inputs, setInputs] = useState({id: '', invset_cat_name: '', status:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    const getDatas = async (e)=>{
        let response = await axios.get(`/investcat/${id}`)
            setInputs(response.data.data);
       
    }

    useEffect(() => {
        if(id){
            getDatas();
        }
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
                apiurl=`/investcat/${inputs.id}`;
            }else{
                apiurl=`/investcat/create`;
            }
            
            let res = await axios.post(apiurl, inputs)
            console.log(res);
            navigate('/investcat')
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
                        <h3>Add New Invest Categories</h3>
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
                                        <div className="row">
                                <div className="col-md-3">
                                    <label >Invest Categoriesat</label>
                                </div>
                                <div className="col-md-9 form-group">
                                    <input type="text" id="invset_cat_name" className="form-control" name="invset_cat_name" defaultValue={inputs.invset_cat_name}  onChange={handleChange}  placeholder="Input Invest Categories Name.."/>
                                </div>
                               
                                <div className="col-md-3">
                                    <label>Status</label>
                                </div>
                                <div className="col-md-9 form-group">
                                    <input type="text" id="status" className="form-control" name="status" defaultValue={inputs.status}  onChange={handleChange} placeholder="Status"/>
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

export default InvestCatAdd