import React, { Component } from 'react';
import Service from '../../services/swapi-service'
import './Random-planet.css';
import {Spinner} from 'react-bootstrap'
import PlanetView from './PlanetView';

export default class RandomPlanet extends Component {

Service = new Service();

state = {
    planet: {},
    loading: true,
};

constructor() {
    super();
    this.updatePlanet();
};

onPlanetLoaded = (planet) => {
    this.setState({
        planet,
        loading: false,
    });
};

updatePlanet = () => {
    const id = 12;
    this.Service
        .getPlanet(id)
        .then(this.onPlanetLoaded);
};

render() {
    const { planet: {population, rotationPeriod, diameter, name, id},loading } = this.state
        return (
            <div className="random-planet jumbotron rounded">
                {
                    loading ? 
                    (<div className='spinner-center'><Spinner animation="grow"/></div>) 
                    : (
                        <PlanetView 
                            name={name} 
                            id={id} 
                            population={population} 
                            rotationPeriod={rotationPeriod}
                            diameter={diameter}/>
                    )
                }
            </div>
        )}
}