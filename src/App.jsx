import React, {Component} from 'react';
import './App.css';
import {getAnimalsAction} from './Actions/getAnimalsAction'
import {connect} from 'react-redux'
import CardContainer from './CardContainer';
import {getDonationAction} from './Actions/getDonationAction'


class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      isError: ''
    }
  }


componentDidMount() {
this.getData()
}

getDonations() {
  fetch('http://localhost:3001/api/v1/donations')
    .then(res => res.json())
    .then(data => this.props.getDonationData(data))
    .catch(error => this.setState({isError: error}))
}

getData() {
  fetch('http://localhost:3001/api/v1/rescue-animals')
    .then(res => res.json())
    .then(data => this.loaded(data))
    .catch(error => this.setState({isError: error}))
}

loaded(data) {
  this.props.getAnimals(data)
  this.setState({isLoaded: true})
}

  render() {
  return (

    <div className="App">
      {this.state.isError && <p>{this.state.isError}</p>}
      {!this.state.isError && !this.state.isLoaded && 'Is Loading'}
      {!this.state.isError && this.state.isLoaded && <CardContainer/>}
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  getAnimals: animals => dispatch(getAnimalsAction(animals)),
  getDonation: donation => dispatch(getDonationAction(donation))
})

export default connect(null, mapDispatchToProps)(App);
