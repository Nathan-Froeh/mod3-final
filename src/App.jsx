import React, {Component} from 'react';
import './App.css';
import {getAnimalsAction} from './Actions/getAnimalsAction'
import {connect} from 'react-redux'

class App extends Component {

componentDidMount() {
this.getData()
}

getData() {
  fetch('http://localhost:3001/api/v1/rescue-animals')
    .then(res => res.json())
    .then(data => this.props.getAnimals(data))
}

  render() {
  return (

    <div className="App">
     
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  getAnimals: animals => dispatch(getAnimalsAction(animals))
})

export default connect(null, mapDispatchToProps)(App);
