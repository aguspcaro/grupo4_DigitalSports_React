import React from 'react'


 const LastProduct = (props) => {
    return (
       <>
        <div>
            <h6 className="m-0 font-weight-bold">{props.title}</h6>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width:"25rem"}} src={props.image} alt="dummy"/>
        </div>
        <p>{props.description}</p>
        <a target="_blank" rel="nofollow" href={props.detail}>Ver detalle de producto</a>
       </>
    )
}

export default LastProduct