import React from 'react';
/* ASSETS */
import product from "../../assets/images/product_dummy.svg";

/* COMPONENTS */
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Data from "./Data/Data";
import Panel from "./Panel/Panel";
import User from "./Users/Users";



const Main = () => { 

	return (		

        <div id="content-wrapper" className="d-flex flex-column">
			
			<div id="content">
						
				<Header />			
					
				<div className="container-fluid">
					
					<div className="d-sm-flex align-items-center justify-content-between mb-4">

						<h1 className="h3 mb-0 text-gray-800">Digital Sports</h1>

					</div>

					<div className="row">

						<Data title="Total de productos" cant = "20"/>

						<Data title="Total de usuarios" cant = "4"/>

						<Data title="Total de categorías" cant = "10"/>

					</div>					
					
					<div className="row">
					
						<div className="col-lg-6 mb-4">

							<div className="card shadow mb-4">

								<div className="card-header py-3">

									<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>

								</div>

								<div className="card-body">

									<div className="text-center">

										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width : "25rem"}} src={product} alt="dummy"/>

									</div>

									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
									
									<a target="_blank" rel="nofollow" href="/">View product detail</a>

								</div>

							</div>

						</div>
						
						<div className="col-lg-6 mb-4">						
							<Panel/>

						</div>

						<div className="col-lg-6 mb-4">
											
							<User title= 'Listado de usuarios'/>

						</div>

					</div>
					
				</div>

			</div>

			<Footer/>				

		</div>
    )
}

export default Main;