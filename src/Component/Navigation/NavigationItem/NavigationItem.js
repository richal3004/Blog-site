import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const navigationItem =(props)=>{
    return(
        <li className={classes.NavigationItem}>
            <NavLink
                exact={props.exact}
                activeClassName={classes.active}
                to={props.path}>
                    {props.children}
            </NavLink>
        </li>
    )
}

export default navigationItem