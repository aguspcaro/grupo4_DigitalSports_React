import React from 'react'

/* ASSETS */

import product from '../../../../assets/images/product_dummy.svg';

const PanelProducts = (props) => {

    return (

        <div className="card shadow mb-4">

            <div className="card-header py-3">

                <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6> 

            </div>

            <div class="card-body">

                <div className="text-center">

                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width : "25rem"}} src={product} alt="dummy"/>

                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam</p>

                <a target="_blank" rel="nofollow" href="/">Ver detalle del Producto</a>

            </div>

        </div>
    )
}

export default PanelProducts;





