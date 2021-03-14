import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import './Random-planet.css';

export default class RandomPlanet extends Component {

SwapiService = new SwapiService();

state = {
    planet: {}
};

constructor() {
    super();
    this.updatePlanet();
};

onPlanetLoaded = (planet) => {
    this.setState({planet});
};

updatePlanet = () => {
    const id = 12;
    this.SwapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded);
};

render() {
    const { planet: {population, rotationPeriod, diameter, name, id} } = this.state
        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='git' />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )}
}