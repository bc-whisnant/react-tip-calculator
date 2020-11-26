import './App.css';
import React, { Component } from 'react'
import Form from './components/Form'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <header className='App-header mb-4'>
          <h4>Tip Calculator</h4>
        </header>
        <Form />
      </div>
    )
  }
  
}

export default App;
