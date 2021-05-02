import React, { Component } from 'react';
// import Dante,{ Toggle, Lorem, DanteInlineTooltipConfig , DanteTooltipConfig} from 'Dante2';
import classes from './NewPost.module.css';
import EditorJS from 'react-editor-js';
import Header from '@editorjs/header';




class newpost extends Component {

 

    
    render(){
        let data={
            '1': 'test'
        }
        return(

            <div className={classes.Newpost_Container}>
                

                {/* <div className={classes.Title} role="textbox" aria-placeholder="Enter text here..." contenteditable="true"></div>  */}
                <div className={classes.Editor}>
                    <EditorJS
                        data={data}
                        tools={{
                            my_title:{
                                class:Header,
                            }, 
                            
                        }}
                        placeholder= "Enter Title"
                        defaultBlock="my_title"
                    />
                </div>

                <div className={classes.Editor}>
                    <EditorJS 

                        tools={{
                            header:{
                                class: Header,
                                config:{
                                    placeholder:"my header",
                                },                                
                            },
                            
                            
                        }}
                        placeholder="Tell Your Story..."
                    />
                </div>
            </div>
        );
    }
} 

export default newpost;