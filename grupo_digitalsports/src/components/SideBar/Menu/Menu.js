

import React from 'react'
import NavItem from './NavItem/NavItem'


export default function Menu() {

    return (
		
		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

		<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">

			<div className="sidebar-brand-icon">

				<i className="fas fa-chart-line"></i>

			</div>

			<div className="sidebar-brand-text mx-3">Admin</div>

		</a>
		
		<hr className="sidebar-divider my-0"/>		

		<NavItem title="Dashboard" active='active'>

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
