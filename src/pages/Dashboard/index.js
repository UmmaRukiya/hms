import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Dashboard() {
  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                <h3>Dashboard</h3>
                <p className="text-subtitle text-muted">A good dashboard to display your statistics</p>
            </div>
            <section className="section">
                <div className="row mb-2">
                    <div className="col-12 col-md-3">
                        <div className="card card-statistic">
                            <div className="card-body p-0">
                                <div className="d-flex flex-column">
                                    <div className='px-3 py-3 d-flex justify-content-between'>
                                        <h3 className='card-title'>BALANCE</h3>
                                        <div className="card-right d-flex align-items-center">
                                            <p>$50 </p>
                                        </div>
                                    </div>
                                    <div className="chart-wrapper">
                                        <canvas id="canvas1" style= {{height:'100px', important:true }}></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card card-statistic">
                            <div className="card-body p-0">
                                <div className="d-flex flex-column">
                                    <div className='px-3 py-3 d-flex justify-content-between'>
                                        <h3 className='card-title'>Revenue</h3>
                                        <div className="card-right d-flex align-items-center">
                                            <p>$532,2 </p>
                                        </div>
                                    </div>
                                    <div className="chart-wrapper">
                                        <canvas id="canvas2" style={{height: '100px' ,important:true }}></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card card-statistic">
                            <div className="card-body p-0">
                                <div className="d-flex flex-column">
                                    <div className='px-3 py-3 d-flex justify-content-between'>
                                        <h3 className='card-title'>ORDERS</h3>
                                        <div className="card-right d-flex align-items-center">
                                            <p>1,544 </p>
                                        </div>
                                    </div>
                                    <div className="chart-wrapper">
                                        <canvas id="canvas3" style={{height:'100px' ,important:true}}></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card card-statistic">
                            <div className="card-body p-0">
                                <div className="d-flex flex-column">
                                    <div className='px-3 py-3 d-flex justify-content-between'>
                                        <h3 className='card-title'>Sales Today</h3>
                                        <div className="card-right d-flex align-items-center">
                                            <p>423 </p>
                                        </div>
                                    </div>
                                    <div className="chart-wrapper">
                                        <canvas id="canvas4" style={{height:'100px' ,important:true }}></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className='card-heading p-1 pl-3'>Sales</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 col-12">
                                        <div className="pl-3">
                                            <h1 className='mt-5'>$21,102</h1>
                                            <p className='text-xs'><span className="text-green"><i data-feather="bar-chart" width="15"></i> +19%</span> than last month</p>
                                            <div className="legends">
                                                <div className="legend d-flex flex-row align-items-center">
                                                    <div className='w-3 h-3 rounded-full bg-info mr-2'></div><span className='text-xs'>Last Month</span>
                                                </div>
                                                <div className="legend d-flex flex-row align-items-center">
                                                    <div className='w-3 h-3 rounded-full bg-blue mr-2'></div><span className='text-xs'>Current Month</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-12">
                                        <canvas id="bar"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Doctors List</h4>
                                <div className="d-flex ">
                                    <i data-feather="download"></i>
                                </div>
                            </div>
                            <div className="card-body px-0 pb-0">
                                <div className="table-responsive">
                                    <table className='table mb-0' id="table1">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>City</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Graiden</td>
                                                <td>vehicula.aliquet@semconsequat.co.uk</td>
                                                <td>076 4820 8838</td>
                                                <td>Offenburg</td>
                                                <td>
                                                    <span className="badge bg-success">Active</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Dale</td>
                                                <td>fringilla.euismod.enim@quam.ca</td>
                                                <td>0500 527693</td>
                                                <td>New Quay</td>
                                                <td>
                                                    <span className="badge bg-success">Active</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Nathaniel</td>
                                                <td>mi.Duis@diam.edu</td>
                                                <td>(012165) 76278</td>
                                                <td>Grumo Appula</td>
                                                <td>
                                                    <span className="badge bg-danger">Inactive</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Darius</td>
                                                <td>velit@nec.com</td>
                                                <td>0309 690 7871</td>
                                                <td>Ways</td>
                                                <td>
                                                    <span className="badge bg-success">Active</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ganteng</td>
                                                <td>velit@nec.com</td>
                                                <td>0309 690 7871</td>
                                                <td>Ways</td>
                                                <td>
                                                    <span className="badge bg-success">Active</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Oleg</td>
                                                <td>rhoncus.id@Aliquamauctorvelit.net</td>
                                                <td>0500 441046</td>
                                                <td>Rossignol</td>
                                                <td>
                                                    <span className="badge bg-success">Active</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Kermit</td>
                                                <td>diam.Sed.diam@anteVivamusnon.org</td>
                                                <td>(01653) 27844</td>
                                                <td>Patna</td>
                                                <td>
                                                    <span className="badge bg-success">Active</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card ">
                            <div className="card-header">
                                <h4>Your Earnings</h4>
                            </div>
                            <div className="card-body">
                                <div id="radialBars"></div>
                                <div className="text-center mb-5">
                                    <h6>From last month</h6>
                                    <h1 className='text-green'>+$2,134</h1>
                                </div>
                            </div>
                        </div>
                        <div className="card widget-todo">
                            <div className="card-header border-bottom d-flex justify-content-between align-items-center">
                                <h4 className="card-title d-flex">
                                    <i className='bx bx-check font-medium-5 pl-25 pr-75'></i>Progress
                                </h4>
                        
                            </div>
                            <div className="card-body px-0 py-1">
                                <table className='table table-borderless'>
                                    <tfoot>
                                        <tr>
                                            <td className='col-3'>UI Design</td>
                                            <td className='col-6'>
                                                <div className="progress progress-info">
                                                    <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={0}
                                                        aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </td>
                                            <td className='col-3 text-center'>60%</td>
                                        </tr>
                                        <tr>
                                            <td className='col-3'>VueJS</td>
                                            <td className='col-6'>
                                                <div className="progress progress-success">
                                                    <div className="progress-bar" role="progressbar" style={{width: '35%'}} aria-valuenow={0}
                                                        aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </td>
                                            <td className='col-3 text-center'>30%</td>
                                        </tr>
                                        <tr>
                                            <td className='col-3'>Laravel</td>
                                            <td className='col-6'>
                                                <div className="progress progress-danger">
                                                    <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={0}
                                                        aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </td>
                                            <td className='col-3 text-center'>50%</td>
                                        </tr>
                                        <tr>
                                            <td className='col-3'>ReactJS</td>
                                            <td className='col-6'>
                                                <div className="progress progress-primary">
                                                    <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={0}
                                                        aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </td>
                                            <td className='col-3 text-center'>80%</td>
                                        </tr>
                                        <tr>
                                            <td className='col-3'>Go</td>
                                            <td className='col-6'>
                                                <div className="progress progress-secondary">
                                                    <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow={0}
                                                        aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </td>
                                            <td className='col-3 text-center'>65%</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </AdminLayout>       
  )
}

export default Dashboard