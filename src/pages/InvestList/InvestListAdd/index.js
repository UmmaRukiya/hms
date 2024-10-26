import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function InvestListAdd() {
    const [inputs, setInputs] = useState({id:'',inv_cat_id:'',invest_name:'',description:'',price:'', status:'' });
    const [investcat, setInvest_Cat] = useState([]);
    
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/investlist/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }
    function get_relation(){
        axios.get(`${process.env.REACT_APP_API_URL}/investcat/index`).then(function(response) {
            setInvest_Cat(response.data.data);
        });
       
       
    }

    useEffect(() => {
        if(id){
            getDatas();
        }
        get_relation();
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
                apiurl=`/investlist/${inputs.id}`;
            }else{
                apiurl=`/investlist/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/investlist')
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
                        <h3>Add Investigation List</h3>
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
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="first-name-vertical">Investigation Catagory</label>
                                                    {investcat.length > 0 && 
                                                        <select className="form-control" id="inv_cat_id" name='inv_cat_id' defaultValue={inputs.inv_cat_id} onChange={handleChange}>
                                                            <option value="">Select Room Catagories</option>
                                                            {investcat.map((d, key) =>
                                                                <option value={d.id}>{d.invest_cat_name}</option>
                                                            )}
                                                        </select>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="room_no">Investigation Name</label>
                                                    <input type="text" id="invest_name" className="form-control" defaultValue={inputs.invest_name} name="invest_name" onChange={handleChange} placeholder="Choose Department Name"/>
                                                    </div>
                                                </div>
                                              
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="description">Description</label>
                                                    <textarea  rows="3" id="description" className="form-control" defaultValue={inputs.description} name="description" onChange={handleChange}></textarea>
                                                   
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="price">Price</label>
                                                    <input type="number" id="status" className="form-control" defaultValue={inputs.price} name="price" onChange={handleChange} placeholder="Room Avoilable or Not..."/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="status">Status</label>
                                                    <input type="number" id="status" className="form-control" defaultValue={inputs.status} name="status" onChange={handleChange} placeholder="Room Avoilable or Not..."/>
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

export default InvestListAdd