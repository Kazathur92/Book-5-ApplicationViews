import React, { Component } from 'react'

//try passing the .value in the the actuall fetch so it can search and display what is being typed.

export default class Search extends Component {
  searchIt() {
    let textBox = document.querySelector("#text")
    let getAnimals = fetch("http://localhost:8088/animals").then(r => r.json())
    getAnimals.forEach((animal) => {

      if(textBox.value.contains("Q") ) {



      }

    })


  }


}