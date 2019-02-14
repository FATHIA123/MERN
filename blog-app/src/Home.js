import React, { Component } from 'react';
// import axios from 'axios'
// import {  Route  } from 'react-router-dom'

// import App from './App'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
          gif: " ",
          title: " "
        }
        this.getGif = this.getGif.bind(this)
      }
    
    getGif(){
        fetch("http://api.giphy.com/v1/gifs/random?tag=funny+cat&rating=g&api_key=9Phn04eIwyARjPxr10LBRbnmXh3FpU79", {
          headers: {
            Accept: "application/json"
          }
        }).then(response => response.json())
        .then(jsonData => {
          console.log(jsonData.data.slug)
          this.setState({gif: jsonData.data.images.downsized.url })
          this.setState({ title: jsonData.data.slug})
        })
    
    }
    render() {

        return (
            <div>

                <img src={this.state.gif} alt=""/>
                 
                 <h1> title: {this.state.title} </h1>

                 <button onClick={this.getGif}>New Gif </button>
            </div>
        );
    }
}

export default Home;