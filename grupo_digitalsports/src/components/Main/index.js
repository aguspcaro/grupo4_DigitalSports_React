import React from 'react';

/* COMPONENTS */
import Header from "./Header/header";
import SectionMain from "./SectionMain/SectionMain"
import Footer from "./Footer/footer";





const Main = () => { 

	return (		

        <div id="content-wrapper" className="d-flex flex-column">
			
			<div id="content">
						
				<Header />			
					
		        <SectionMain />		

			</div>

			<Footer/>				

		</div>
    )
}

export default Main;