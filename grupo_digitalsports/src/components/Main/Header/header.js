import React from 'react'

/* ASSETS */
import avatar from "./img/Ds.jpeg"

const Header = () =>  {

    return (

        <div id="content-wrapper" className="d-flex flex-column">
			
			<div id="content">

				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
					
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">

						<i className="fa fa-bars"></i>

					</button>
					
					<ul className="navbar-nav ml-auto">
						
						
						<div className="topbar-divider d-none d-sm-block"></div>
						
						<li className="nav-item dropdown no-arrow">

							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">

								<a href= 'http://localhost:3001' className="mr-2 d-none d-lg-inline text-gray-600 small">Digital Sports</a>

								<img className="img-profile rounded-circle" src={avatar} alt="img-profile" width="60"/>

							</a>
							
						</li>

					</ul>

				</nav>

			</div>			

		</div>
    )
}
export default Header;