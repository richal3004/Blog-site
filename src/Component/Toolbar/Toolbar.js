import React from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './Toolbar.module.css';

const toolbar = (props)=>{
    return(
    <header className={classes.Toolbar}>
        <nav>
            <Navigation />
        </nav>
    </header>
    )
};

export default toolbar;