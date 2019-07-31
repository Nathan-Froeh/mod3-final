import React, { Component } from 'react';
// import './Card.scss'


export class Donations extends Component {
constructor(props) {
  super(props)
  this.state = {

  }
}

  render() {
    console.log(this.props.donation)
    const {name, donation} = this.props.donation
    return (
      <div className='card'>
        <h2>{name}</h2>
        <p>{donation}</p>
      </div>
    )
  }
}

export default Donations
