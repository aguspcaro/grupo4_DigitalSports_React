import React from 'react'
import  LastProduct  from './LastProduct/LastProduct';

const PanelProducts = (props) => {


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
            setProducto(products.lastProductCreated)
    
        }
        /* hook productos llamado a la api */
        console.log (productos)                           


    return (

        <div className="card shadow mb-4">

            <div className="card-header py-3">

                <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6> 

            </div>

            <div class="card-body">

               

                <LastProduct title={productos.name} description={productos.description} image={`http://localhost:3001${productos.img}`} detail={`http://localhost:3001/products/detail/${productos.id}`}/>
                    
                
                
                
            

            



            </div>

        </div>
    )
}

export default PanelProducts;





