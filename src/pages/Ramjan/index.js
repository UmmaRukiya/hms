import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
function Ramjan() {
  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 order-last">
                        <h3>Table</h3>
                        <p className="text-subtitle text-muted">Examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.</p>
                    </div>
                    <div className="col-12 col-md-6 order-md-2 order-first">
                        <nav aria-label="breadcrumb" className='breadcrumb-header'>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Table</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="row" id="table-bordered">
            <div className="col-12">
                <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Bordered table</h4>
                </div>
                <div className="card-content">
                    <div className="card-body">
                    <p className="card-text">Add <code>.table-bordered</code> for borders on all sides of the table and cells. For
                        Inverse Dark Table, add <code>.table-dark</code> along with <code>.table-bordered</code>.</p>
                    </div>
                    <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                        <thead>
                        <tr>
                            <th>NAME</th>
                            <th>RATE</th>
                            <th>SKILL</th>
                            <th>TYPE</th>
                            <th>LOCATION</th>
                            <th>ACTION</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="text-bold-500">Michael Right</td>
                            <td>$15/hr</td>
                            <td className="text-bold-500">UI/UX</td>
                            <td>Remote</td>
                            <td>Austin,Taxes</td>
                            <td><a href="#"><i
                                className="badge-circle badge-circle-light-secondary font-medium-1" data-feather="mail"></i></a></td>
                        </tr>
                        <tr>
                            <td className="text-bold-500">Morgan Vanblum</td>
                            <td>$13/hr</td>
                            <td className="text-bold-500">Graphic concepts</td>
                            <td>Remote</td>
                            <td>Shangai,China</td>
                            <td><a href="#"><i
                                className="badge-circle badge-circle-light-secondary font-medium-1" data-feather="mail"></i></a></td>
                        </tr>
                        <tr>
                            <td className="text-bold-500">Tiffani Blogz</td>
                            <td>$15/hr</td>
                            <td className="text-bold-500">Animation</td>
                            <td>Remote</td>
                            <td>Austin,Texas</td>
                            <td><a href="#"><i
                                className="badge-circle badge-circle-light-secondary font-medium-1" data-feather="mail"></i></a></td>
                        </tr>
                        <tr>
                            <td className="text-bold-500">Ashley Boul</td>
                            <td>$15/hr</td>
                            <td className="text-bold-500">Animation</td>
                            <td>Remote</td>
                            <td>Austin,Texas</td>
                            <td><a href="#"><i
                                className="badge-circle badge-circle-light-secondary font-medium-1" data-feather="mail"></i></a></td>
                        </tr>
                        <tr>
                            <td className="text-bold-500">Mikkey Mice</td>
                            <td>$15/hr</td>
                            <td className="text-bold-500">Animation</td>
                            <td>Remote</td>
                            <td>Austin,Texas</td>
                            <td><a href="#"><i
                                className="badge-circle badge-circle-light-secondary font-medium-1" data-feather="mail"></i></a></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>

    </AdminLayout>    
  )
}

export default Ramjan