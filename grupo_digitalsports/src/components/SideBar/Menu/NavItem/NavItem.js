import React from 'react';

import PropTypes from 'prop-types';



const NavItem = (props) => {

    let classLista = `nav-item ${props.active ?? ""}`;

    return (

        <li className={classLista}>

            <a target="_blank" className= 'nav-link collapsed' href={props.href}>

                {props.children}

                <span>{props.title}</span>

            </a>
            
        </li>

    )
}

NavItem.propTypes = {

    active: PropTypes.string

}

export default NavItem;