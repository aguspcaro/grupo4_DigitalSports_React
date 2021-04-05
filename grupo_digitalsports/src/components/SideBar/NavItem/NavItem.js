import React from 'react'



export default function NavItem(props) {

    return (

        <li className="nav-item">

            <a className="nav-link" href="/">

                {props.children}

                <span>{props.title}</span>

            </a>
            
        </li>

    )
}