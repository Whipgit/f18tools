import React, { Component } from 'react'
import './App.css'

import HelmetComponent from './Components/Helmet/HelmetComponent'
import Reciprocal from './Components/Reciprocal/Reciprocal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelmetComponent />
        <Reciprocal />
      </div>
    )
  }
}

export default App
