import React, { Component } from 'react'



export default class OwnerList extends Component {
  render() {
    return (
      <section>
      <h3 className="title">Pet Owners:</h3>
      <div className="owners">
        {
          this.props.owners.map(owner =>
            <div key={owner.id} className="card">
              <div className="card-body"></div>
                <h5 className="card-title"></h5>
              <h5 className="name">{owner.name}</h5>
              <br></br>
              {" Phone: "}
              <br></br>
              {owner.phone}
              <br></br>
              <a href="#"
                  onClick={() => this.props.removeOwner(owner.id)}
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