import React, { Component } from 'react';
import Header from './organisms/header'
import Paper from './templates/paper'
import Footer from './organisms/footer'


class App extends Component<{}, {}> {

  render () {
    return (
      <div>
        <Header />
        <Paper />
        <Footer />
      </div>
    )
  }
}


export default App
