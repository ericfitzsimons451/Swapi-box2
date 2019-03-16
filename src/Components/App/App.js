import React, { Component } from 'react';
import '../../reset.scss'
import './App.scss';
import Header from '../Header/Header.js'
import Loader from '../Loader/Loader.js'
import Nav from '../Nav/Nav.js'
import CardContainer from '../CardContainer/CardContainer.js'
import fetchAnything from '../FetchAnything/FetchAnything.js'
import { cleanPeople, cleanPlanets, cleanVehicles } from '../Cleaners/Cleaners.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      crawlText: '',
      people: [],
      planets: [],
      vehicles: [],
      currentSelection: null
    }
  }

  async componentDidMount() {
    const randomNum = Math.floor(Math.random() * 7) + 1
    const response = await fetch(`https://swapi.co/api/films/${randomNum}`)
    const data = await response.json()
    this.setState({ crawlText: data.opening_crawl })
  }

  fetchPeople = async () => {
    const url = 'https://swapi.co/api/people'
    const people = await fetchAnything(url)
    const cleanedPeople = await cleanPeople(people.results)
    await this.setState({ people: cleanedPeople, currentSelection: 'people'})
  }

  fetchPlanets = async () => {
    const url = 'https://swapi.co/api/planets'
    const planets = await fetchAnything(url)
    const cleanedPlanets = await cleanPlanets(planets.results)
    await this.setState({ planets: cleanedPlanets, currentSelection: 'planets'  })
  }

  fetchVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles'
    const vehicles = await fetchAnything(url)
    const cleanedVehicles = await cleanVehicles(vehicles.results)
    await this.setState({ vehicles: cleanedVehicles, currentSelection: 'vehicles' })
  }

  render() {
    const { crawlText } = this.state
    if (!crawlText) {
      return (
        <div>
          <Loader />
        </div>
      )
    } else {
      return (    
        <div className="App">
          <Header crawlText={crawlText} />
          <Nav className="nav" fetchPeople={this.fetchPeople} 
               fetchPlanets={this.fetchPlanets} 
               fetchVehicles={this.fetchVehicles} />
          <CardContainer data={this.state}/>
        </div>
      );
    }
  }
}

export default App;


