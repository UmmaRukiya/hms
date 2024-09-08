import * as React from 'react';
import { useState } from 'react';

function App() {
  return (
   <>
 
    <div id="app">
        <div id="sidebar" className='active'>
            <div className="sidebar-wrapper active">
    <div className="sidebar-header">
        <img src="assets_admin/images/logo.svg" alt="" srcset=""/>
    </div>
    <div className="sidebar-menu">
        <ul className="menu">
            
                <li className='sidebar-title'>Main Menu</li>
            
                <li className="sidebar-item active ">
                    <a href="index.html" className='sidebar-link'>
                        <i data-feather="home" width="20"></i> 
                        <span>Dashboard</span>
                    </a>
                    
                </li>

                <li className="sidebar-item  has-sub">
                    <a href="#" className='sidebar-link'>
                        <i data-feather="triangle" width="20"></i> 
                        <span>Components</span>
                    </a>
                    
                    <ul className="submenu ">
                        
                        <li>
                            <a href="component-alert.html">Alert</a>
                        </li>
                        
                        <li>
                            <a href="component-badge.html">Badge</a>
                        </li>
                        
                        <li>
                            <a href="component-breadcrumb.html">Breadcrumb</a>
                        </li>
                        
                        <li>
                            <a href="component-buttons.html">Buttons</a>
                        </li>
                        
                        <li>
                            <a href="component-card.html">Card</a>
                        </li>
                        
                        <li>
                            <a href="component-carousel.html">Carousel</a>
                        </li>
                        
                        <li>
                            <a href="component-dropdowns.html">Dropdowns</a>
                        </li>
                        
                        <li>
                            <a href="component-list-group.html">List Group</a>
                        </li>
                        
                        <li>
                            <a href="component-modal.html">Modal</a>
                        </li>
                        
                        <li>
                            <a href="component-navs.html">Navs</a>
                        </li>
                        
                        <li>
                            <a href="component-pagination.html">Pagination</a>
                        </li>
                        
                        <li>
                            <a href="component-progress.html">Progress</a>
                        </li>
                        
                        <li>
                            <a href="component-spinners.html">Spinners</a>
                        </li>
                        
                        <li>
                            <a href="component-tooltips.html">Tooltips</a>
                        </li>
                        
                    </ul>
                    
                </li>

                <li className="sidebar-item  has-sub">
                    <a href="#" className='sidebar-link'>
                        <i data-feather="briefcase" width="20"></i> 
                        <span>Extra Components</span>
                    </a>
                    
                    <ul className="submenu ">
                        
                        <li>
                            <a href="component-extra-avatar.html">Avatar</a>
                        </li>
                        
                        <li>
                            <a href="component-extra-divider.html">Divider</a>
                        </li>
                        
                    </ul>
                    
                </li>

                <li className='sidebar-title'>Forms &amp; Tables</li>
            
                <li className="sidebar-item  has-sub">
                    <a href="#" className='sidebar-link'>
                        <i data-feather="file-text" width="20"></i> 
                        <span>Form Elements</span>
                    </a>
                    
                    <ul className="submenu ">
                        
                        <li>
                            <a href="form-element-input.html">Input</a>
                        </li>
                        
                        <li>
                            <a href="form-element-input-group.html">Input Group</a>
                        </li>
                        
                        <li>
                            <a href="form-element-select.html">Select</a>
                        </li>
                        
                        <li>
                            <a href="form-element-radio.html">Radio</a>
                        </li>
                        
                        <li>
                            <a href="form-element-checkbox.html">Checkbox</a>
                        </li>
                        
                        <li>
                            <a href="form-element-textarea.html">Textarea</a>
                        </li>
                        
                    </ul>
                    
                </li>

                <li className="sidebar-item  ">
                    <a href="form-layout.html" className='sidebar-link'>
                        <i data-feather="layout" width="20"></i> 
                        <span>Form Layout</span>
                    </a>
                    
                </li>

                <li className="sidebar-item  ">
                    <a href="form-editor.html" className='sidebar-link'>
                        <i data-feather="layers" width="20"></i> 
                        <span>Form Editor</span>
                    </a>
                    
                </li>

                <li className="sidebar-item  ">
                    <a href="table.html" className='sidebar-link'>
                        <i data-feather="grid" width="20"></i> 
                        <span>Table</span>
                    </a>
                    
                </li>

                <li className="sidebar-item  ">
                    <a href="table-datatable.html" className='sidebar-link'>
                        <i data-feather="file-plus" width="20"></i> 
                        <span>Datatable</span>
                    </a>
                    
                </li>

                <li className='sidebar-title'>Extra UI</li>
            
                <li className="sidebar-item  has-sub">
                    <a href="#" className='sidebar-link'>
                        <i data-feather="user" width="20"></i> 
                        <span>Widgets</span>
                    </a>
                    
                    <ul className="submenu ">
                        
                        <li>
                            <a href="ui-chatbox.html">Chatbox</a>
                        </li>
                        
                        <li>
                            <a href="ui-pricing.html">Pricing</a>
                        </li>
                        
                        <li>
                            <a href="ui-todolist.html">To-do List</a>
                        </li>
                        
                    </ul>
                    
                </li>

                <li className="sidebar-item  has-sub">
                    <a href="#" className='sidebar-link'>
                        <i data-feather="trending-up" width="20"></i> 
                        <span>Charts</span>
                    </a>
                    
                    <ul className="submenu ">
                        
                        <li>
                            <a href="ui-chart-chartjs.html">ChartJS</a>
                        </li>
                        
                        <li>
                            <a href="ui-chart-apexchart.html">Apexchart</a>
                        </li>
                        
                    </ul>
                    
                </li>

                <li className='sidebar-title'>Pages</li>
            
                <li className="sidebar-item  has-sub">
                    <a href="#" className='sidebar-link'>
                        <i data-feather="user" width="20"></i> 
                        <span>Authentication</span>
                    </a>
                    
                    <ul className="submenu ">
                        
                        <li>
                            <a href="auth-login.html">Login</a>
                        </li>
                        
                        <li>
                            <a href="auth-register.html">Register</a>
                        </li>
                        
                        <li>
                            <a href="auth-forgot-password.html">Forgot Password</a>
                        </li>
                        
                    </ul>
                    
                </li>

                <li className="sidebar-item  has-sub">
                    <a href="#" className='sidebar-link'>
                        <i data-feather="alert-circle" width="20"></i> 
                        <span>Errors</span>
                    </a>
                    
                    <ul className="submenu ">
                        
                        <li>
                            <a href="error-403.html">403</a>
                        </li>
                        
                        <li>
                            <a href="error-404.html">404</a>
                        </li>
                        
                        <li>
                            <a href="error-500.html">500</a>
                        </li>
                        
                    </ul>
                    
                </li>

        </ul>
    </div>
    <button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
</div>
        </div>
        <div id="main">
            <nav className="navbar navbar-header navbar-expand navbar-light">
                <a className="sidebar-toggler" href="#"><span className="navbar-toggler-icon"></span></a>
                <button className="btn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex align-items-center navbar-light ml-auto">
                        <li className="dropdown nav-icon">
                            <a href="#" data-toggle="dropdown" className="nav-link  dropdown-toggle nav-link-lg nav-link-user">
                                <div className="d-lg-inline-block">
                                    <i data-feather="bell"></i>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-large">
                                <h6 className='py-2 px-4'>Notifications</h6>
                                <ul className="list-group rounded-none">
                                    <li className="list-group-item border-0 align-items-start">
                                        <div className="avatar bg-success mr-3">
                                            <span className="avatar-content"><i data-feather="shopping-cart"></i></span>
                                        </div>
                                        <div>
                                            <h6 className='text-bold'>New Order</h6>
                                            <p className='text-xs'>
                                                An order made by Ahmad Saugi for product Samsung Galaxy S69
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="dropdown nav-icon mr-2">
                            <a href="#" data-toggle="dropdown" className="nav-link  dropdown-toggle nav-link-lg nav-link-user">
                                <div className="d-lg-inline-block">
                                    <i data-feather="mail"></i>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#"><i data-feather="user"></i> Account</a>
                                <a className="dropdown-item active" href="#"><i data-feather="mail"></i> Messages</a>
                                <a className="dropdown-item" href="#"><i data-feather="settings"></i> Settings</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#"><i data-feather="log-out"></i> Logout</a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                                <div className="avatar mr-1">
                                    <img src="assets_admin/images/avatar/avatar-s-1.png" alt="" srcset=""/>
                                </div>
                                <div className="d-none d-md-block d-lg-inline-block">Hi, Saugi</div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#"><i data-feather="user"></i> Account</a>
                                <a className="dropdown-item active" href="#"><i data-feather="mail"></i> Messages</a>
                                <a className="dropdown-item" href="#"><i data-feather="settings"></i> Settings</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#"><i data-feather="log-out"></i> Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            
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
                        <h4 className="card-title">Orders Today</h4>
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
                            <tr>
                                <td className='col-3'>UI Design</td>
                                <td className='col-6'>
                                    <div className="progress progress-info">
                                        <div className="progress-bar" role="progressbar" style={{width: '60%'}} ariaValueNow={0}
                                            ariaValueMin={0} ariaValueMax={100}></div>
                                    </div>
                                </td>
                                <td className='col-3 text-center'>60%</td>
                            </tr>
                            <tr>
                                <td className='col-3'>VueJS</td>
                                <td className='col-6'>
                                    <div className="progress progress-success">
                                        <div className="progress-bar" role="progressbar" style={{width: '35%'}} ariaValueNow={0}
                                            ariaValueMin={0} ariaValueMax={100}></div>
                                    </div>
                                </td>
                                <td className='col-3 text-center'>30%</td>
                            </tr>
                            <tr>
                                <td className='col-3'>Laravel</td>
                                <td className='col-6'>
                                    <div className="progress progress-danger">
                                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} ariaValueNow={0}
                                            ariaValueMin={0} ariaValueMax={100}></div>
                                    </div>
                                </td>
                                <td className='col-3 text-center'>50%</td>
                            </tr>
                            <tr>
                                <td className='col-3'>ReactJS</td>
                                <td className='col-6'>
                                    <div className="progress progress-primary">
                                        <div className="progress-bar" role="progressbar" style={{width: '80%'}} ariaValueNow={0}
                                            ariaValueMin={0} ariaValueMax={100}></div>
                                    </div>
                                </td>
                                <td className='col-3 text-center'>80%</td>
                            </tr>
                            <tr>
                                <td className='col-3'>Go</td>
                                <td className='col-6'>
                                    <div className="progress progress-secondary">
                                        <div className="progress-bar" role="progressbar" style={{width: '65%'}} ariaValueNow={0}
                                            ariaValueMin={0} ariaValueMax={100}></div>
                                    </div>
                                </td>
                                <td className='col-3 text-center'>65%</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

            <footer>
                <div className="footer clearfix mb-0 text-muted">
                    <div className="float-left">
                        <p>2020 &copy; Voler</p>
                    </div>
                    <div className="float-right">
                        <p>Crafted with <span className='text-danger'><i data-feather="heart"></i></span> by <a href="http://ahmadsaugi.com">Ahmad Saugi</a></p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <script src="assets_admin/js/feather-icons/feather.min.js"></script>
    <script src="assets_admin/vendors/perfect-scrollbar/perfect-scrollbar.min.js"></script>
    <script src="assets_admin/js/app.js"></script>
    
    <script src="assets_admin/vendors/chartjs/Chart.min.js"></script>
    <script src="assets_admin/vendors/apexcharts/apexcharts.min.js"></script>
    <script src="assets_admin/js/pages/dashboard.js"></script>

    <script src="assets_admin/js/main.js"></script>

   </>
  );
}

export default App;
