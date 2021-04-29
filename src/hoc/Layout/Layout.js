import React,{ Component } from 'react';
import Aux from '../Aux';
import Toolbar from '../../Component/Toolbar/Toolbar';

class layout extends Component{
    render(){
        return(
            <Aux>
                <Toolbar />
                <main style={{margin:"72px"}}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default layout; 