import React from 'react';

const CategoryList = (props) => {    
	
    return (
        
        <div className="card bg-info text-white shadow">
            <div className="card-body">
                {props.name} : {props.cantidad}
                
            </div>

        </div>
						    
    )
}

export default CategoryList;