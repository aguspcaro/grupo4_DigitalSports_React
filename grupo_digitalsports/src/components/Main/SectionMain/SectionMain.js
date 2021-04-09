import Data from "./Data/Data";
import Titulo from './Data/Titulo';
import Panel from "./Panel/Panel";
import User from "./Users/Users";

/* ASSETS */
import product from "../../../assets/images/product_dummy.svg";


const SectionMain = () => { 

    return (

            <div className="container-fluid">
                <Titulo title="Digital Sports" />
            <div className="row">
                <Data title="Total de productos" cant = "20"/>
                <Data title="Total de usuarios" cant = "4"/>
                <Data title="Total de categorías" cant = "10"/>
            </div>					
                    
                <div className="row">
                
                    <div className="col-lg-6 mb-4">
                        <Panel title="Last product in Data Dase">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width : "25rem"}} src={product} alt="dummy"/>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                        <a target="_blank" rel="nofollow" href="/">View product detail</a>
                        </Panel>
                    </div>
                    
                    <div className="col-lg-6 mb-4">						
                        <Panel title="Categories in Data Base">
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body">
                                        Category 01
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Panel>
                    </div>
                
                    <div className="col-lg-6 mb-4">
                                        
                        <User title= 'Listado de usuarios'/>
                
                    </div>
                
                </div>
                    
        </div>
        
    )
}

export default SectionMain;