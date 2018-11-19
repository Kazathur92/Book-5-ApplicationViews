import React, { Component } from 'react'

export default class AnimalsList extends Component {
  matchPetToOwner(currentAnimalId) {
    // console.log(this.props.ownersPets)
    let petOwnerJoin = this.props.ownersPets.filter(pet => {
      return pet.petId === currentAnimalId
    })
    // console.log(petOwnerJoin)
    let currentPetOwners = petOwnerJoin.map(object => {
      console.log(this.props.owners)
      return this.props.owners.find((owner) => {
        return owner.id === object.ownerId
      }).name
      // if(owner.id != object.ownerId) {

      // }
    })
    // console.log(currentPetOwners)
    return currentPetOwners

  }

  render() {
    return (
      <section>
        <h3 className="title">Animals:</h3>
        <div className="animals">
        {
          this.props.animals.map(animal =>
            <div key={animal.id} className="card">
              <h5 className="name">{animal.name}</h5>
                <br></br>
                <div className="card-body"></div>
                <h5 className="card-title"></h5>
                <img src={animal.image}></img>
                <br></br>
                {" Species: "}
                {animal.species}
                <br></br>
                {" Owners: "}
                <br></br>
                {this.matchPetToOwner(animal.id).join(" and ")}
                <a href="#"
                  onClick={() => this.props.deleteAnimal(animal.id)}
                  className="card-link">Delete</a>
                <br></br>
                {"==================="}
            </div>
                )
              }
              </div>
      </section>
              );
            }
}