import React, { Component } from 'react'

// export default class LocationList extends Component {
//   render() {
//       return (
//           <article>
//               <h1>Locations List</h1>
//               <div>
//               <section>Nashville North</section>
//               <p>I know this area.. sort of</p>
//               </div>
//               <div>
//               <section>Nashville South</section>
//               <p>I dont know this area</p>
//               </div>
//           </article>
//       );
//   }
// }

export default class LocalList extends Component {
  render() {
    return (
      <section>
        <h3 className="title">Locations:</h3>
        <div className="locations">
        {
          this.props.locations.map(location =>
            <div key={location.id} className="card">
             <div className="card-body"></div>
                <h5 className="card-title"></h5>
              <h5 className="name">{location.name}</h5>
              {" Address: "}
              <br></br>
              {location.address}
            <br></br>
              <a href="#"
                  onClick={() => this.props.deleteLocation(location.id)}
                  className="card-link">Remove</a>
                <br></br>
                {"=============="}

            </div>
          )
        }
        </div>
      </section>
    );
  }
}