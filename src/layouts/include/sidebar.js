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
				<img src="assets_admin/images/logo.svg" alt="" srcSet=""/>
			</div>
			<div className="sidebar-menu">
				<ul className="menu">
					<li className='sidebar-title'>Main Menu</li>
					<li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/")}`}>
						<Link to={"/"} className={`sidebar-link`}>
							<i data-feather="home" width="20"></i> 
							<span>Dashboard</span>
						</Link>
					</li>
					<li onClick={activeMenu}s className={`sidebar-item ${isLinkActive("/fahim")}`}>
						<Link to={"/fahim"} className={`sidebar-link`}>
							<i data-feather="home" width="20"></i> 
							<span>Table</span>
						</Link>
					</li>
					<li className={`sidebar-item has-sub`} onClick={activeMenu}>
						<a href="#" className='sidebar-link'>
							<i data-feather="triangle" width="20"></i> 
							<span>Components</span>
						</a>
						
						<ul className={`submenu ${isLinkActive("/ramjan")}`}>
							<li><Link to={"/fahim"}>Alert</Link></li>
							<li><Link to={"/ramjan"}>Ramjan</Link></li>
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
				</ul>
			</div>
			<button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
		</div>
    </div>
  )
}

export default Sidebar