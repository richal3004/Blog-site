import React, { Component } from 'react';
import classes from './Blog.module.css';
import NewPost from './NewPost/NewPost';
import Aux from '../../hoc/Aux';


// const Newpost =<NewPost />

class blog extends Component {
    
    render()
    {
        return(
            <Aux>
                <p>None</p>
                <header>
                    <nav>
                        <ul>
                            <li className={classes.blog}><a href="/home">Home</a></li>
                        </ul>
                    </nav>
                </header>
            </Aux>
            );
    }
}

export default blog;