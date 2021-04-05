import React from 'react'

import NavItem from './NavItem/NavItem'

export default function SideBar() {

    return (
		
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			<a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">

				<div class="sidebar-brand-icon">

					<i class="fas fa-chart-line"></i>

				</div>

				<div class="sidebar-brand-text mx-3">Admin</div>

			</a>
			
			<hr className="sidebar-divider my-0"/>		

			<NavItem title="Dashboard">

				<i className="fas fa-fw fa-tachometer-alt"></i>

			</NavItem>
			
			<hr className="sidebar-divider"/>

			
			<div className="sidebar-heading">Actions</div>	

			<NavItem title="Pages">
			
				<i className="fas fa-fw fa-folder"></i>

			</NavItem>

			<NavItem title="Charts">
			
				<i className="fas fa-fw fa-chart-area"></i>

			</NavItem>	

			<NavItem title="Tables">
			
				<i className="fas fa-fw fa-table"></i>

			</NavItem>		
			
			<hr className="sidebar-divider d-none d-md-block"/>

		</ul>		

    )
}
