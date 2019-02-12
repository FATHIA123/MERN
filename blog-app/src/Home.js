import React, { Component } from 'react';
// import axios from 'axios'
// import {  Route  } from 'react-router-dom'

// import App from './App'

class Home extends Component {
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
            <div>
                <div>title: {this.props.title }</div>
                <div>createdAt: {this.props.title }</div>
                <div>description: {this.props.title }</div>

                <button onClick="getGif">Next</button>
            </div>
        );
    }
}

export default Home;