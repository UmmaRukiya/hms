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
				<img src="logo.png" alt="hospital logo" srcSet=""/>
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
						
						<ul className={`submenu ${isLinkActive("/ramjan")}`}>
							<li><Link to={"/fahim"}>Alert</Link></li>
							<li><Link to={"/ramjan"}>Ramjan</Link></li>
							
							
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-medkit" width="20"></i> 
							<span>Nurse</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/ramjan")}`}>
							<li><Link to={"/fahim"}>Alert</Link></li>
							<li><Link to={"/ramjan"}>Ramjan</Link></li>
							
							
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-street-view" width="20"></i> 
							<span>Stuff</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/ramjan")}`}>
							<li><Link to={"/fahim"}>Alert</Link></li>
							<li><Link to={"/ramjan"}>Ramjan</Link></li>
							
							
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-calendar-plus-o" width="20"></i> 
							<span>Schedule</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/ramjan")}`}>
							<li><Link to={"/fahim"}>Alert</Link></li>
							<li><Link to={"/ramjan"}>Ramjan</Link></li>
							
							
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-file-archive-o" width="20"></i> 
							<span>Appointment</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/ramjan")}`}>
							<li><Link to={"/fahim"}>Alert</Link></li>
							<li><Link to={"/ramjan"}>Ramjan</Link></li>
							
							
						</ul>
						
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i className="fa fa-files-o" width="20"></i> 
							<span>Prescripttion</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/ramjan")}`}>
							<li><Link to={"/fahim"}>Alert</Link></li>
							<li><Link to={"/ramjan"}>Ramjan</Link></li>
							
							
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
						
						<ul className={`submenu ${isLinkActive("/ramjan")}`}>
							<li><Link to={"/fahim"}>Alert</Link></li>
							<li><Link to={"/ramjan"}>Ramjan</Link></li>
							
							
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
						
						<ul className={`submenu ${isLinkActive("/ramjan")}`}>
							<li><Link to={"/fahim"}>Alert</Link></li>
							<li><Link to={"/ramjan"}>Ramjan</Link></li>
							
							
						</ul>
						
					</li>
					

					{/* <li className="sidebar-item  has-sub">
						<a href="#" className='sidebar-link'>
							<i className="fa fa-users" width="20"></i> 
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
						
					</li> */}
				</ul>
			</div>
			<button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
           
		</div>
    </div>
  )
}

export default Sidebar