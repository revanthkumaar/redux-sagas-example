import React, { Component } from 'react';
import { connect } from "react-redux";

class App extends React.Component {
  render(){
    return(
      <div>
        <button onClick={()=> this.props.dispatch(fetchImage())}> Show Image</button>
        {
          this.props.loading ? <p>loading...</p> :
           this.props.error ? <p>Error occured</p> : <p><img src={this.props.url}/></p>
        }
      </div>
    )
  }
}


export default App;
