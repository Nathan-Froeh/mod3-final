import {connect} from 'react-redux'
import {getDonationAction} from './Actions/getDonationAction'
import React, { Component } from 'react'

export class Form extends Component {
  constructor() {
    super() 
    this.state = {
      name: '',
      donation: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  handlSubmit = (e) => {

    e.preventDefault()
    const donation = {
      id: Date.now(),
      name: this.state.name,
      donation: this.state.donation
    }

    const method = {
      method: 'POST',
      body: JSON.stringify(donation),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('http://localhost:3001/api/v1/donations/', method)
      .then(res => res.json())
      .then(data => this.props.getDonation([data]))
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.handlSubmit}>
          <input type="text" name='name' placeholder='Name' onChange={this.handleChange}/>
          <input type="text" name='donation' placeholder='Donation' onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getDonation: donation => dispatch(getDonationAction(donation))
})

export default connect(null, mapDispatchToProps)(Form)
