import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import {  Route , Link, Switch } from 'react-router-dom'

// what I want to do first is to have api of imgs and when the next button is clicked then different ones are shown. 
// like dad jokes but instead of jokes it will be imgs 


class App extends Component {
 

 


  render() {
    return (
      <div className="App">
      
       <nav>
       <Link to="/gif" >
            <h1>Gify</h1>
       </Link> 
      </nav>

                <h1> Welcome to Gify Page </h1>
       <main>
             <Switch>

              <Route path="/gif"  render={() => <Home {...this.state}/>} /> 
              {/* <Route path="/" component= {App}/> */}
              </Switch>
           
       </main>
       
      </div>
    );
  }
}

export default App;
