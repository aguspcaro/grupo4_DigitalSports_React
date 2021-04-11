import React, {useState, useEffect} from 'react'; 

import Data from "./Data/Data";
import Titulo from './Data/Titulo';
import Panel from "./Panel/Panel";
import User from "./Users/Users";
import PanelProducts from "./PanelProducts/PanelProducts";
import ListProducts from "./ListProducts/ListProducts";

function useFetche(url, defaultResponse){ 

	const [data, setData] = useState(defaultResponse) 

	async function getDataFromAPI(url){
		try {
			const res = await fetch(url);
			const data = await res.json(); 

			setData({ 
                isLoading: false, 
				data
			})

		}	catch (e) { console.log(e);}
	}

	useEffect(() => { 
		getDataFromAPI(url);
	}, [url]); 

	return data;

}

const SectionMain = () => { 
  
    /* hook de total de productos */
    const [productos, setProducto]=React.useState([])

    React.useEffect( () =>{
        listadoProductos()
    },[])
    /* hook de total de productos */

    /* hook productos llamado a la api */
    const listadoProductos= async()=>{
        const data = await fetch ("http://localhost:3001/api/products")
        const products = await data.json()
        //console.log (products)
        setProducto(products.meta)
    }
    /* hook productos llamado a la api */

    const apiUserEndpoint = 'http://localhost:3001/api/users'

	const useFetchResponse = useFetche(apiUserEndpoint, {isLoading: true, data: null}); 

	if(!useFetchResponse.data || useFetchResponse.isLoading){
		return 'Loading...';
	}

	const apiUser = useFetchResponse.data.meta;

    console.log(apiUser);

    return (

            <div className="container-fluid">
                <Titulo title="Digital Sports" />
            <div className="row">
                <Data title="Total de productos" cant = {productos.count}/>
                <Data title="Total de usuarios" cant = {apiUser.count}/>
                <Data title="Total de categorías" cant = {productos.countByCategory.length}/>
            </div>					
                    
                <div className="row">
                
                    
                    <div className="col-lg-6 mb-4">		

                        <Panel title="Categorías en la base de datos"/>

                    </div>

                    <div className="col-lg-6 mb-4">
                                        
                        <User title= 'Listado de usuarios'/>
                
                    </div>

                    <div className="col-lg-6 mb-4">

                        <PanelProducts title="Último producto agregado"/>

                    </div>

                    <div className="col-lg-6 mb-4">

                        <ListProducts title="Listado de productos"/>

                    </div>
                
                </div>
                    
        </div>

    )
}

export default SectionMain;