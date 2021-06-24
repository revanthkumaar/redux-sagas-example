import React, { Component } from 'react';

class App extends React.Component {

constructor(){
    super();

    this.state = {
        data: [],
        payload: ''
    }
}
 
    componentDidMount(){ //on component mount

        const fetchData = async() => {
            const response = await fetch(
                `https://hn.algolia.com/api/v1/search?query=JavaScript`
            );
            const data = await response.json()
        }
        this.setState({data})
        fetchData();

    }

   componentDidUpdate(){//gets triggered when the component changes 

    //is there any change in the previous state
        if(previousState.payload !== this.state.query){
    const fetchData = async() => {
            this.state.payload = {
                method:'POST',
                body: {

                },
                json: true
            }
            const response = await fetch(
                `https://hn.algolia.com/api/v1/search?query`
            , this.state.payload);
            const data = await response.json()
                    this.setState(data)
        }

        fetchData();
        }   


   }

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
