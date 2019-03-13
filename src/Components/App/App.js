import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header.js'
import Loader from '../Loader/Loader.js'
import Nav from '../Nav/Nav.js'
import fetchAnything from '../FetchAnything/FetchAnything.js'
import { cleanPeople, cleanPlanets } from '../Cleaners/Cleaners.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      crawlText: '',
      people: [],
      planets: [],
      vehicles: []
    }
  }

  async componentDidMount() {
    const randomNum = Math.floor(Math.random() * 7) + 1
    const response = await fetch(`https://swapi.co/api/films/${randomNum}`)
    const data = await response.json()
    this.setState({crawlText: data.opening_crawl})
  }

  fetchPeople = async () => {
    const url = 'https://swapi.co/api/people'
    const people = await fetchAnything(url)
    const cleanedPeople = cleanPeople(people.results)
    this.setState({people: await Promise.all(cleanedPeople)})
  }

  fetchPlanets = async () => {
    const url = 'https://swapi.co/api/planets'
    const planets = await fetchAnything(url)
    const cleanedPlanets = cleanPlanets(planets.results)
    this.setState({planets: await Promise.all(cleanedPlanets)})
  }

  fetchVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles'
    const data = await fetchAnything(url)
    this.setState({vehicles: data.results})
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
        </div>
      );
    }
  }
}

export default App;
