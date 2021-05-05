import React from 'react';
import Header from './organisms/header'
import PaperList from './templates/paperList'
import Footer from './organisms/footer'


const App = () => {
  return (
    <div>
      <Header />
      <PaperList />
      <Footer />
    </div>
  )
}


export default App;
