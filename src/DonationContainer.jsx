import React, { Component } from 'react'
import {connect} from 'react-redux'
import Donations from './Donations'

class DonationContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  
  render() {
    const donations = this.props.donations.map((donation) => {
      return (<Donations donation={donation} key={donation.id}/>)
  })

    return (
      <div className='donation-container'>
        {donations}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  donations: state.donations
})

export default connect(mapStateToProps)(DonationContainer)
