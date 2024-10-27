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
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-plus" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg>
							<span>Patient Admit</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/patientadmit")} ${isLinkActive("/patientadmit/add")}`}>
						<li><Link to={"/patientadmit"}>Patient Admit List</Link></li>
						<li><Link to={"/patientadmit/add"}>Patient Admit Add</Link></li>
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
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="" fill="currentColor" className="bi bi-prescription" viewBox="0 0 16 16">
  <path d="M5.5 6a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V9h.293l2 2-1.147 1.146a.5.5 0 0 0 .708.708L9 11.707l1.146 1.147a.5.5 0 0 0 .708-.708L9.707 11l1.147-1.146a.5.5 0 0 0-.708-.708L9 10.293 7.695 8.987A1.5 1.5 0 0 0 7.5 6zM6 7h1.5a.5.5 0 0 1 0 1H6z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1zm2 3v10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4zM3 3h10V1H3z"/>
</svg>
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
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-capsule-pill" viewBox="0 0 16 16">
  <path d="M11.02 5.364a3 3 0 0 0-4.242-4.243L1.121 6.778a3 3 0 1 0 4.243 4.243l5.657-5.657Zm-6.413-.657 2.878-2.879a2 2 0 1 1 2.829 2.829L7.435 7.536zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m-.5 1.042a3 3 0 0 0 0 5.917zm1 5.917a3 3 0 0 0 0-5.917z"/>
</svg>
							<span>Medicine</span>
							
						</a>
						
						<ul className={`submenu ${isLinkActive("/medicine")} ${isLinkActive("/medicine/add")}`}>
						<li><Link to={"/medicine"}>Medicine List</Link></li>
						<li><Link to={"/medicine/add"}>Medicine Add</Link></li>
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard2-pulse" viewBox="0 0 16 16">
  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>
  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
  <path d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128z"/>
</svg>
							<span>Investigation</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/investlist")} ${isLinkActive("/investlist/add")}`}>
						<li><Link to={"/investlist"}>Investigation List</Link></li>
						<li><Link to={"/investlist/add"}>Investigation Add</Link></li>
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