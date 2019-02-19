import React, { Component } from 'react';
// import axios from 'axios'
// import {  Route  } from 'react-router-dom'

// import App from './App'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            gifs: [],
        //   image: " ",
        //   description: " "
        }
        this.getGif = this.getGif.bind(this)
      }
    
    getGif(){
        fetch("https://mern-lab-fm.herokuapp.com/", {
        //   headers: {
        //     Accept: "application/json"
        //   }
        }).then(response => response.json())
        .then(jsonData => {
          console.log(jsonData)
            this.setState({gifs: jsonData})
        //   this.setState({image: jsonData.image })
        //   this.setState({ description: jsonData.description})
        //   console.log(this.state.image)
        })
    
    }
    render() {
        console.log(this.state.gifs)
        return (
            <div>

                <img src={this.state.image} alt=""/>
                 
                 <h1> title: {this.state.description} </h1>

                 <button onClick={this.getGif}>New Gif </button>
            </div>
        );
    }
}

export default Home;