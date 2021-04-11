import React from 'react';

const List = (props) => {    
	
    return (
        
        <div className="card bg-info text-white shadow">
            <div className="card-body">
                {props.id}    {props.name}
                
            </div>

        </div>
						    
    )
}

export default List;