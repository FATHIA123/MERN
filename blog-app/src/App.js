import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import {  Route , Link, Switch } from 'react-router-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: " "
    }
    this.getGif = this.getGif.bind(this)
  }

  getGif(){
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    }).then(response => response.json())
    .then(jsonData => {
      console.log(jsonData)
      this.setState({joke: jsonData.joke })
    })

}


  render() {
    return (
      <div className="App">
       <nav>
       <Link to="/" >
            <h1>Gify</h1>
       </Link> 
      </nav>

       <main>
           <Switch>
              <Route path="/" exact render={() => <Home title={this.state.title}/>} /> 
              {/* <Route /> */}
           </Switch>

       </main>
      </div>
    );
  }
}

export default App;
