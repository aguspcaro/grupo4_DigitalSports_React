import React from 'react'
import List from './List/List'

 const ListProducts = (props) => {
    
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
            setProducto(products.products)
    
        }
        /* hook productos llamado a la api */
        console.log (productos)                           

    
    
    return (
        <div className="card shadow mb-4">

        <div className="card-header py-3">

				<h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>

        </div>

        <div className="card-body">

            <div className="row">

                <div className="col-lg-12 mb-4">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Producto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            {
							productos.map((product, i) => ( 
								
								<List key={product + i} id = {product.id}/>
						
							))
						    }	
                            </td>
                            <td>{
							productos.map((product, i) => ( 
								
								<List key={product + i} name = {product.name}/>
						
							))
						    }	
                            </td>
    
                        </tr>
                    </tbody>
            
                </table>
                </div>

            </div>

        </div>
        
    </div>

    )
}

export default ListProducts