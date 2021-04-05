import React from 'react';

import PropTypes from 'prop-types';

const NavItem = (props,{active}) => {

    let classLista = `nav-item ${active ?? ''}`;

    return (

        <li className={classLista}>

            <a className= 'nav-link collapsed' href="/">

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