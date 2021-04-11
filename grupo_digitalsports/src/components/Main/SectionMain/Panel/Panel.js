import React, {useState, useEffect} from 'react'; 

import CategoryList from './CategoryList/CategoryList'




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

	const data = await fetch ("http://localhost:3001/api/products")
	const products = await data.json()
	//console.log (products)
	setProducto(products.meta.countByCategory)

}

//console.log(productos.meta?.countByCategory);



   

const Panel = (props) => {


	const apiUserEndpoint = 'http://localhost:3001/api/products'

	const useFetchResponse = useFetche(apiUserEndpoint, {isLoading: true, data: null}); 

	if(!useFetchResponse.data || useFetchResponse.isLoading){
		return 'Loading...';
	}

	const apiProd = useFetchResponse.data.meta.countByCategory



    console.log(apiProd);
	var obj = {first_name: "Jhon Doe"}
var ruta="first_name"
nombre = obj[ruta] 
console.log(nombre)
									
	
    return (
        <div className="card shadow mb-4">
			<div className="card-header py-3">
				<h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
			</div>

			<div className="card-body">

				<div className="row">

					<div className="col-lg-6 mb-4">
						
						{
							productos.map((product,i) =>(
						
							<CategoryList key={product +1 } name={product.name} cantidad={product.cantidad} />
						
							))

							}
						
					

					</div>

				</div>

            </div>

			

		</div>
    )
	
}

export default Panel









