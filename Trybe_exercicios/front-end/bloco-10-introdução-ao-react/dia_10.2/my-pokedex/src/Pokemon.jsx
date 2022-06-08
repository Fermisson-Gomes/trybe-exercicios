import { Component } from 'react';

export class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: {value, measurementUnit}, image } = this.props.pokemon;
    return (
      <section className="pokemon">
        <div>
        <h2>{ name }</h2>
        <h3>{ type }</h3>
        <p>{ `peso: ${value}${measurementUnit}` }</p>
        </div>

        <img src={ image } alt={ name }></img>
      </section>
    )
  }
}