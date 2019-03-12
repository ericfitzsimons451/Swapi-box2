import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header.js'
import Loader from '../Loader/Loader.js'
import Nav from '../Nav/Nav.js'
import fetchAnything from '../FetchAnything/FetchAnything.js'

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
    const randomNum = Math.floor(Math.random() * 7) - 1
    const response = await fetch(`https://swapi.co/api/films/${randomNum}`)
    const data = await response.json()
    this.setState({crawlText: data.opening_crawl})
  }

  fetchPeople = async () => {
    const url = 'https://swapi.co/api/people'
    const people = await fetchAnything(url)
    const cleanedPeople = people.map(async (person) => {
      const homeworld = await fetchAnything(person.homeworld)
      const species = await fetchAnything(person.species)
      return {name: person.name,
              homeworld: homeworld.name,
              species: species.name,
              population: homeworld.population}
    })
    this.setState({people: await Promise.all(cleanedPeople)})
  }

  fetchPlanets = async () => {
    const url = 'https://swapi.co/api/planets'
    const data = await fetchAnything(url)
    this.setState({planets: data.results})
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
