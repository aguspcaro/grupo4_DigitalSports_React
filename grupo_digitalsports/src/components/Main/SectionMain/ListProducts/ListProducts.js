import Number from './Number';

import React, { useState } from 'react';

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

        
        // El codigo sigue en el archivo Number.js
        // Numero de pagina inicial y el numero de productos por pagina
        const [currentPage, setCurrentPage] = useState(1);
        const [CantPorPagina] = useState(7);         
      
        // Division de los productos en paginas
        const indexOfLastPost = currentPage * CantPorPagina; //numero final de indice en el array
        const indexOfFirstPost = indexOfLastPost - CantPorPagina; // numero inicial de indice en el array
        const currentPosts = productos.slice(indexOfFirstPost, indexOfLastPost); // te crea un array y te incluye ahi adentro desde donde a donde
      
        // Cambio de pagina
        const paginate = pageNumber => setCurrentPage(pageNumber); // se crea aca y se usa en el archivo Number.js. A esta funcion le vamos a pasar un numero por parametro y la va a setear como estado a la variable

    
    
    return (
        <div className="card shadow mb-4">

        <div className="card-header py-3">

				<h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>

        </div>

        <div className="card-body">

            <div className="row">

                <div className="col-lg-12 mb-4">
                    <table className="table table-striped">
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
                                currentPosts.map((product, i) => ( 
                                    
                                    <List key={product + i} id = {product.id}/>
                            
                                ))
                                }	
                                </td>
                                <td>{
                                currentPosts.map((product, i) => ( 
                                    
                                    <List key={product + i} name = {product.name}/>
                            
                                ))
                                }	
                                </td>
        
                            </tr>
                            <Number
                                CantPorPagina={CantPorPagina}
                                totalProd={productos.length} // le pasamos a la variable que se para por paramentro en Number, la cantidad de prodcutos
                                paginate={paginate}
                            />
                        </tbody>
                
                    </table>
                </div>

            </div>

        </div>
        
    </div>

    )
}

export default ListProducts