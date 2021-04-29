import React, { Component } from 'react';
import Dante,{ Toggle, Lorem, DanteInlineTooltipConfig , DanteTooltipConfig} from 'Dante2';
import classes from './NewPost.module.css';

class newpost extends Component {
    
    render(){
        let h1=<h1>Richql</h1>;
        return(
            <div className={classes.Newpost_Container}>
                {/* <Dante
                    content
                    ={h1}
                    default_wrappers
                    ={[{ className: 'my-custom-h1', block: 'header-one' }]}
                    /> */}
                <Dante 
                    title="Richal"
                    content={null}
                    // body_placeholder={'I\'m a placeholder'}
                    // onChange={editor => { console.log('editor content: ', editor.emitSerializedOutput()) }}
                    default_wrappers={[{ className: 'graf--h2', block: 'header-one' }]}
                    />

                    {/* <Toggle initial={false}>
                    {({ on, toggle }) => {
                        return (
                        <div>        
                        <Dante
                        content={null} 
                        read_only={on}
                        />
        
                        <button onClick={toggle}>
                        read only
                        </button>
                        {on ? ' si' : ' no'}
                        
                        </div>

                        )
                    }}
                    </Toggle>
                 */}
                <br />
            </div>
        );
    }
} 

export default newpost;