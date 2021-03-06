import React, {Component} from 'react';
import './App.scss';
import {getAnimalsAction} from './Actions/getAnimalsAction'
import {connect} from 'react-redux'
import CardContainer from './CardContainer';
import {getDonationAction} from './Actions/getDonationAction'
import DonationContainer from './DonationContainer';
import Form from './Form';
import {getDonations, getData} from './API'

class App extends Component {
  constructor() {
    super()
    this.state = {
      animalLoaded: false,
      isError: '',
      donationLoaded: false
    }
  }


componentDidMount() {
this.getData()
this.getDonations()
}

getDonations = async() => {
  await getDonations()
    .then(data => this.donationLoaded(data))
    .catch(error => this.setState({isError: error}))
}

getData = async() => {
  await getData()
    .then(data => this.animalLoaded(data))
    .catch(error => this.setState({isError: error}))
}

animalLoaded(data) {
  this.props.getAnimals(data)
  this.setState({animalLoaded: true})
}

donationLoaded(donation) {
  
  this.props.getDonation(donation)
  this.setState({donationLoaded: true})
}

  render() {
  return (

    <div className="App">
      <Form/>
      {this.state.isError && <p>{this.state.isError}</p>}
      {!this.state.isError && !this.state.animalLoaded && 'Is Loading'}
      {!this.state.isError && this.state.animalLoaded && <CardContainer/>}
      {this.state.donationLoaded && <DonationContainer/>}
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  getAnimals: animals => dispatch(getAnimalsAction(animals)),
  getDonation: donation => dispatch(getDonationAction(donation))
})

export default connect(null, mapDispatchToProps)(App);
