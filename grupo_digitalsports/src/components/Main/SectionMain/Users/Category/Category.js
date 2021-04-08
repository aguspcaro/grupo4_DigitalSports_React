import { checkPropTypes } from 'prop-types';
import React from 'react';

const Category = (props) => {    
	
    return (
        
        <div className="card bg-info text-white shadow">
            <div className="card-body">
                {props.usuario}
            </div>
        </div>
						    
    )
}

export default Category;