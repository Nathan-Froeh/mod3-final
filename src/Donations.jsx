import React, { Component } from 'react';


export class Donations extends Component {
constructor(props) {
  super(props)
  this.state = {

  }
}

  render() {
    const {name, donation} = this.props.donation
    return (
      <div className='donation'>
        <h2>{name}</h2>
        <p>{donation}</p>
      </div>
    )
  }
}

export default Donations
