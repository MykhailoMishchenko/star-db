import React from 'react';
import './App.css'
import Header from '../header/Header';
import RandomPlanet from '../random-planet/Random-planet';
import ItemList from '../item-list/Item-list';
import PersonDetails from '../person-details/Person-details';


const App = () => {
  return (
    <div className='app'>
      <Header />
      <RandomPlanet/>
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;