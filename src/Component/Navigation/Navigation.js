import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './Navigation.module.css';

const navigation = (props)=>{
    return(
        <ul className={classes.Navigation}> 
            <NavigationItem exact path="/">Home</NavigationItem>
            <NavigationItem path="/newpost">NewPost</NavigationItem>
        </ul>
    )
};

export default navigation;