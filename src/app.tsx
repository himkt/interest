import React, { Component } from 'react';
import Header from './organisms/header'
import Hero from './organisms/hero'
import Paper from './templates/paper'
import Footer from './organisms/footer'


class App extends Component<{}, {}> {

  render () {
    return (
      <div>
        <Header />
        <Hero />
        <Paper />
        <Footer />
      </div>
    )
  }
}


export default App
