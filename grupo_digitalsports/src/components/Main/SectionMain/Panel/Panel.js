import React from 'react';

import CategoryList from './CategoryList/CategoryList'


const Panel = (props) => {

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
		setProducto(products.meta.countByCategory)

	}
	/* hook productos llamado a la api */
									
	
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









