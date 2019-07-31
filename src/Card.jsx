import React, { Component } from 'react';
import './Card.scss'

// img, name, species, description

export class Card extends Component {
constructor(props) {
  super(props)
  this.state = {

  }
}

  render() {
    const {img, name, species, description} = this.props.animal
    return (
      <div className='card'>
        <h2>{name}</h2>
        <p>{species}</p>
        <img src={img} alt={name}/>
        <p>{description}</p>
      </div>
    )
  }
}

export default Card
