import React from 'react'

function Header() {
  return (
        <nav className="navbar navbar-header navbar-expand navbar-light">
            <a className="sidebar-toggler" href="#"><span className="navbar-toggler-icon"></span></a>
            <button className="btn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav d-flex align-items-center navbar-light ml-auto">
                    <li className="dropdown nav-icon">
                        {/* <a href="#" data-toggle="dropdown" className="nav-link  dropdown-toggle nav-link-lg nav-link-user">
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
                        </div> */}


                        <button type='button' className='btn btn-info' ><i className="fa fa-sign-out" width="20"></i> Logout</button>
                    
                    </li>
                    {/* <li className="dropdown nav-icon mr-2">
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
                    </li> */}
                    {/* <li className="dropdown">
                        <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                            <div className="avatar mr-1">
                                <img src="assets_admin/images/avatar/avatar-s-1.png" alt="" srcSet=""/>
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
                    </li> */}
                </ul>
            </div>
        </nav>
  )
}

export default Header