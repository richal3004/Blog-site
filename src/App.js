import './App.css';
import React, { Component } from 'react';
import Blog from './Container/Blog/Blog';
// import FullPost from './Container/Blog/FullPost/FullPost';
import NewPost from './Container/Blog/NewPost/NewPost';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

class App extends Component {

  render(){
    
    return(
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/newpost" component={NewPost} />
            <Route path="/" exact component={Blog} />
          </Switch>
        </Layout>
          {/* <Blog name="Richal" nameAlter={this.nameChangeHandler}/>
          <FullPost /> */}
          {/* <NewPost /> */}
          {/* <NewPost /> */}
      </div>
    );
  }
}

export default App;
