import React, { Component } from 'react'


class LoadingContainer extends Component<{}, {}> {

  render() {
    return (
      <section style={{ padding: '3rem' }}>
        <div className="container is-max-widescreen">
          <progress className="progress is-medium is-dark" max="100">Loading...</progress>
        </div>
      </section>
    )
  }
}


export default LoadingContainer
