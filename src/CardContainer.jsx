import React, { Component } from 'react'
import {connect} from 'react-redux'
import Card from './Card'

class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  
  render() {
    const cards = this.props.animals.map((animal) => {
      return (<Card animal={animal} key={animal.id}/>)
  })

    return (
      <div className='card-container'>
        {cards}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  animals: state.animals
})

export default connect(mapStateToProps)(CardContainer)
