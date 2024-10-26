import React from 'react'
import { Link,useLocation } from 'react-router-dom'
function Sidebar() {

	const activeMenu=(e)=>{
        document.querySelectorAll('.submenu').forEach(
            function(e){
                e.classList.remove('active');
            }
        )
        const childElement = e.target.parentElement.querySelector('.submenu');
        if(childElement && childElement.classList.contains('submenu')){
            childElement.classList.add('active');
        }
    }

	const location = useLocation();
	const isLinkActive = (path)=>{
        return location.pathname == path ? 'active' : "";
    }
  return (
	<div id="sidebar" className='active'>
        <div className="sidebar-wrapper active">
			<div className="sidebar-header">
				<img src="\log.png" alt="hospital logo" srcSet=""/>
			</div>
			<div className="sidebar-menu">
				<ul className="menu">
					<li className='sidebar-title'>HMS Menus</li>
					<li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/")}`}>
						<Link to={"/"} className={`sidebar-link`}>
							<i className="fa fa-hospital-o" width="20"></i> 
							<span>Dashboard</span>
						</Link>
					</li>
					{/* <li onClick={activeMenu}s className={`sidebar-item ${isLinkActive("/fahim")}`}>
						<Link to={"/fahim"} className={`sidebar-link`}>
							<i data-feather="home" width="20"></i> 
							<span>Table</span>
						</Link>
					</li> */}
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-user-md" width="20"></i> 
							<span>Doctor</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/doctor")} ${isLinkActive("/doctor/add")}`}>
						<li><Link to={"/doctor"}>Doctor List</Link></li>
						<li><Link to={"/doctor/add"}>Doctor Add</Link></li>
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-users" width="20"></i> 
							<span>Patient</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/patient")} ${isLinkActive("/patient/add")}`}>
						<li><Link to={"/patient"}>Patient List</Link></li>
						<li><Link to={"/patient/add"}>Patient Add</Link></li>
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-medkit" width="20"></i> 
							<span>Nurse</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/nurse")} ${isLinkActive("/nurse/add")}`}>
						<li><Link to={"/nurse"}>Nurse List</Link></li>
						<li><Link to={"/nurse/add"}>Nurse Add</Link></li>
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-street-view" width="20"></i> 
							<span>Employee</span>
						</a>
						<ul className={`submenu ${isLinkActive("/employe")} ${isLinkActive("/employe/add")}`}>
						<li><Link to={"/employe"}>Employee List</Link></li>
						<li><Link to={"/employe/add"}>Employee Add</Link></li>
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-calendar-plus-o" width="20"></i> 
							<span>Schedule</span>
						</a>
						<ul className={`submenu ${isLinkActive("/schedule")} ${isLinkActive("/schedule/add")}`}>
						<li><Link to={"/schedule"}>Schedule List</Link></li>
						<li><Link to={"/schedule/add"}>Schedule Add</Link></li>
						</ul>
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-file-archive-o" width="20"></i> 
							<span>Appointment</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/appointment")} ${isLinkActive("/appointment/add")}`}>
						<li><Link to={"/appointment"}>Appointment List</Link></li>
						<li><Link to={"/appointment/add"}>Appointment Add</Link></li>
						</ul>
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-files-o" width="20"></i> 
							<span>Prescripttion</span>
						</a>
						<ul className={`submenu ${isLinkActive("/prescription")} ${isLinkActive("/prescription/add")}`}>
						<li><Link to={"/prescription"}>Prescription List</Link></li>
						<li><Link to={"/prescription/add"}>Prescription Add</Link></li>
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-tint" width="20"></i> 
							<span>Blood</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/blood")} ${isLinkActive("/blood/add")}`}>
						<li><Link to={"/blood"}>Blood List</Link></li>
						<li><Link to={"/blood/add"}>Blood Add</Link></li>
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-tint" width="20"></i> 
							<span>Medicine</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/medicine")} ${isLinkActive("/medicine/add")}`}>
						<li><Link to={"/medicine"}>Medicine List</Link></li>
						<li><Link to={"/medicine/add"}>Medicine Add</Link></li>
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-user-plus" width="20"></i> 
							<span>Account Manager</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/ramjan")}`}>
							<li><Link to={"/fahim"}>Alert</Link></li>
							<li><Link to={"/ramjan"}>Ramjan</Link></li>
							
							
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-female" width="20"></i> 
							<span>Human Resources</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/ramjan")}`}>
							<li><Link to={"/fahim"}>Alert</Link></li>
							<li><Link to={"/ramjan"}>Ramjan</Link></li>
							
							
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-bed" width="20"></i> 
							<span>Room Manager</span>
						</a>
						<ul className={`submenu ${isLinkActive("/roomlist")} ${isLinkActive("/roomlist/add")}`}>
						<li><Link to={"/roomlist"}>Room List</Link></li>
						<li><Link to={"/roomlist/add"}>Room Add</Link></li>
						</ul>
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-h-square" width="20"></i> 
							<span>Hospital Activities</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/ramjan")}`}>
							<li><Link to={"/fahim"}>Alert</Link></li>
							<li><Link to={"/ramjan"}>Ramjan</Link></li>
							
							
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-cogs" width="20"></i> 
							<span>Setting</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/department")} ${isLinkActive("/designation")}  ${isLinkActive("/shift")}  ${isLinkActive("/day")} ${isLinkActive("/roomcat")}`}>
						<li><Link to={"/department"}>Department List</Link></li>
						<li><Link to={"/designation"}>Designation List</Link></li>
						<li><Link to={"/shift"}>Shift List</Link></li>
						<li><Link to={"/day"}>Day List</Link></li>
						<li><Link to={"/roomcat"}>Room Catagories List</Link></li>
						<li><Link to={"/investcat"}>Invest Catagories List</Link></li>
						<li><Link to={"/medicinecat"}>Medicine Catagories List</Link></li>
						</ul>
						
					</li>
					
				</ul>
			</div>
			<button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
           
		</div>
    </div>
  )
}

export default Sidebar