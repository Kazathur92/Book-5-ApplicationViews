import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalsList'
import "./animal/Animal.css"
import LocationList from './location/LocationList'
import "./location/Locations.css"
import EmployeeList from './employee/EmployeeList'
import "./employee/Employees.css"
import OwnerList from './owner/OwnerList';
import "./owner/Owners.css"
import Search from './searchBox/searchBox';


class ApplicationViews extends Component {

  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: [],
    ownersPets: []
  }

  componentDidMount() {
    const newState = {}

    fetch("http://localhost:8088/locations")
        .then(r => r.json())
        .then(locations => newState.locations = locations)
        .then(() => fetch("http://localhost:8088/animals")
        .then(r => r.json()))
        .then(animals => newState.animals = animals)
        .then(() => fetch("http://localhost:8088/employees")
        .then(r => r.json()))
        .then(employees => newState.employees = employees)
        .then(() => fetch("http://localhost:8088/owners")
        .then(r => r.json()))
        .then(owners => newState.owners = owners)
        .then(() => fetch("http://localhost:8088/ownersPets")
        .then(r => r.json()))
        .then(ownersPets => newState.ownersPets = ownersPets)
        .then(() => this.setState(newState))
}

deleteAnimal = id => {
  return fetch(`http://localhost:8088/animals/${id}`, {
      method: "DELETE"
  })
  .then(e => e.json())
  .then(() => fetch(`http://localhost:8088/animals`))
  .then(e => e.json())
  .then(animals => this.setState({
      animals: animals
  })
)
}

fireEmployee = id => {
  return fetch(`http://localhost:8088/employees/${id}`, {
      method: "DELETE"
  })
  .then(e => e.json())
  .then(() => fetch(`http://localhost:8088/employees`))
  .then(e => e.json())
  .then(employees => this.setState({
      employees: employees
  })
)
}

removeOwner = id => {
  return fetch(`http://localhost:8088/owners/${id}`, {
      method: "DELETE"
  })
  .then(e => e.json())
  .then(() => fetch(`http://localhost:8088/owners`))
  .then(e => e.json())
  .then(owners => this.setState({
      owners: owners
  })
)
}

deleteLocation = id => {
  return fetch(`http://localhost:8088/locations/${id}`, {
      method: "DELETE"
  })
  .then(e => e.json())
  .then(() => fetch(`http://localhost:8088/locations`))
  .then(e => e.json())
  .then(locations => this.setState({
      owners: locations
  })
)
}

  // you add exatct before the path to specify that that is the main path, anything else will require another slash
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} deleteLocation={this.deleteLocation}/>
        }} />
          <Route path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} deleteAnimal={this.deleteAnimal} owners={this.state.owners} ownersPets={this.state.ownersPets}/>
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} fireEmployee={this.fireEmployee}/>
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList owners={this.state.owners} removeOwner={this.removeOwner} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews


// employeesFromAPI = [
//   { id: 1, name: "Jessica Younker" },
//   { id: 2, name: "Jordan Nelson" },
//   { id: 3, name: "Zoe LeBlanc" },
//   { id: 4, name: "Blaise Roberts" }
// ]

// locationsFromAPI = [
//   { id: 1, name: "Nashville North", address: "500 Circle Way" },
//   { id: 2, name: "Nashville South", address: "10101 Binary Court" }
// ]

// // animalsFromAPI = [
// //   { id: 1, name: "Doodles" },
// //   { id: 2, name: "Jack" },
// //   { id: 3, name: "Angus" },
// //   { id: 4, name: "Henley" },
// //   { id: 5, name: "Derkins" },
// //   { id: 6, name: "Checkers" }
// // ]

// animalsFromAPI = [
//   { id: 1, name: "Quokka", species: "Rodent" },
//   { id: 2, name: "Chameleon", species: "Reptile" },
//   { id: 3, name: "Turtle", species: "Reptile" }
// ]

// ownersFromAPI = [
//   { id: 1, name: "Ryan Tanay", phone: "152-864-4921"},
//   { id: 2, name: "Emma Beaton", phone: "152-864-8472" },
//   { id: 3, name: "Dani Adkins", phone: "152-257-5290" },
//   { id: 4, name: "Adam Oswalt", phone: "152-864-9125" },
//   { id: 5, name: "Fletcher Bangs", phone: "152-579-1925" },
//   { id: 6, name: "Angela Lee", phone: "152-257-5906" }
// ]


// ownersPetsAPI = [
//   { id: 1, ownerId: 1, petId: 1 },
//   { id: 2, ownerId: 2, petId: 1 },
//   { id: 3, ownerId: 3, petId: 3 }
// ]

// state = {
//   employees: this.employeesFromAPI,
//   locations: this.locationsFromAPI,
//   animals: this.animalsFromAPI,
//   owners: this.ownersFromAPI,
//   ownersPets: this.ownersPetsAPI
// }