import React, { Component } from 'react';

class App extends Component {


  constructor(props) {
   super(props);
   this.state = {
    value:0
    }
  };
  count(event){
  this.setState({ value: event.target.value.length });
}
  render() {
    return (

      <div className="container">
        <textarea rows="3" onChange={this.count.bind(this)}> </textarea>
        <div className="counter">{this.state.value}</div>
      </div>


    );
  }

}



export default App;

/*
constructor(props) {
 super(props);
 this.state = {
  value:0
  }
};
count(event){
this.setState({ value: event.target.value });
}
render() {
  return (

    <div className="container">
      <textarea rows="3" onChange={this.count.bind(this)}> </textarea>
      <div className="counter">{this.state.value}</div>
    </div>


  );
}

}
*/
