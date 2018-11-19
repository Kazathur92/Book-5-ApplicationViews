import React, { Component } from 'react'
// import getPetId from './pets/PetsList';
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"

// export default class Kennel extends Component {



class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kennel


//   render() {
//     return (
//       <div>
//         <h3>Student Kennels</h3>
//         <h4>Nashville North Location</h4>
//         <h5>500 Puppy Way</h5>
//         <EmployeeList employees={this.state.employees}/>
//         <LocationList locations={this.state.locations}/>
//         <AnimalList animals={this.state.animals} owners={this.state.owners} ownersPets={this.state.ownersPets}/>
//         <OwnerList owners={this.state.owners}/>
//       </div>
//     )
//   }
// }