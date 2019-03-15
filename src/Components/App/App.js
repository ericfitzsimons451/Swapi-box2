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
    const cleanedPeople = await cleanPeople(people.results)
    this.setState({people: cleanedPeople})
  }

  fetchPlanets = async () => {
    const url = 'https://swapi.co/api/planets'
    const planets = await fetchAnything(url)
    const cleanedPlanets = cleanPlanets(planets.results)
    this.setState({planets: await Promise.all(cleanedPlanets)})
  }

  fetchVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles'
    const vehicles = await fetchAnything(url)
    const cleanedVehicles = cleanVehicles(vehicles.results)
    this.setState({vehicles: await Promise.all(cleanedVehicles)})
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

//put a property in state that will denote
//the currently selected values (planets, people, etc)
//then , based on that, I can map over props
// and pass the correct data

//Card cntainer should be given only the data needed for the cards to render

