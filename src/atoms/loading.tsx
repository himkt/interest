import React from 'react'


const LoadingContainer = () => {

  return (
    <section className="section">
      <div className="columns is-mobile is-centered">
        <div className="column is-half">
          <progress className="progress is-large is-danger">Loading...</progress>
          <progress className="progress is-large is-success">Loading...</progress>
          <progress className="progress is-large is-info">Loading...</progress>
        </div>
      </div>
    </section>
  )
}


export default LoadingContainer;
