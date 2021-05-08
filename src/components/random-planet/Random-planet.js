import React, { Component } from 'react';
import Service from '../../services/swapi-service'
import './Random-planet.css';
import {Spinner} from 'react-bootstrap'
import PlanetView from './PlanetView';
import ErrorScreen from '../errorFolder/error-screen';

export default class RandomPlanet extends Component {

Service = new Service();

state = {
    planet: {},
    loading: true,
    error: false,
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

onError = (error) => {
    this.setState({
        error: true,
    })
};

updatePlanet = () => {
    const id = 13;
    this.Service
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
};

render() {
    const { planet: {population, rotationPeriod, diameter, name, id},loading, error } = this.state
        return (
            <>
                {
                    error ? <ErrorScreen/> : (
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
                    )
                }
            </>
        )}
}