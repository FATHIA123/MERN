import React, { Component } from 'react';
import axios from 'axios'
// import {  Route  } from 'react-router-dom'

// import App from './App'

class Home extends Component {
    componentDidMount () {
        axios.get('')
          .then((res) => {
            console.log(res)
            this.setState({
              gifs: res.data
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }
    render() {


        const gifs = this.state.gifs.map((gif, index) => {
            return (
              <div key={ index }>
                {/* <p>
                  <Link to={`/translations/${gif._id}`}>{ gif.text }</Link>
                </p> */}
                {/* <Route
                  path={`/${gifs._id}`}
                  render={() => {
                    return (
                      <audio controls>
                        <source type="audio/ogg" src={ gifs.audioSource }/>
                      </audio>
                    )
                  }}
                /> */}
              </div>
            )
          })
      
          return (
            <div>
              <h1>Saved gifs</h1>
              { gifs }
            </div>
          )
        


//

        // return (
        //     <div>
        //         <div>title: {this.props.title }</div>
        //         <div>createdAt: {this.props.title }</div>
        //         <div>description: {this.props.title }</div>
        //     </div>
        // );
    }
}

export default Home;