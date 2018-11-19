import React, { Component } from 'react'

// export default class EmployeeList extends Component {
//   render() {
//       return (
//           <article>
//               <h1>Employee List</h1>
//               <section>Jessica Younker</section>
//               <section>Jordan Nelson</section>
//               <section>Zoe LeBlanc</section>
//               <section>Blaise Roberts</section>
//           </article>
//       );
//   }
// }

export default class EmployeeList extends Component {
  render() {
    return (
      <section>
      <h3 className="title">Employees:</h3>
        <div className="employees">
        {
          this.props.employees.map(employee =>
            <div key={employee.id} className="card">
            <h5 className="name">{employee.name}</h5>
              <br></br>
                <div className="card-body"></div>
                <h5 className="card-title"></h5>
                  <img src={employee.image}></img>
                  <br></br>
              <a href="#"
                    onClick={() => this.props.fireEmployee(employee.id)}
                    className="card-link">Terminate</a>
                  <br></br>
              {"==============="}

            </div>
          )
        }
        </div>
      </section>
    );
  }
}