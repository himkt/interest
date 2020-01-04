import React, { Component } from 'react';
import Header from './components/organisms/header'
import Paper from './components/templates/paper'


class App extends Component<{}, {}> {

  render () {
    return (
      <div>
        <Header />
        <Paper />
      </div>
    )
  }
}


export default App
