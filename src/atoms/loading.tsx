import React, { Component} from 'react'


class LoadingContainer extends Component<{}, {}> {

  render () {
    return (
      <section style={{padding: 3 + 'rem'}}>
        <div className="container">
          <div className="columns">
            <div className="column" />
            <div className="column is-one-third">
              <progress className="progress is-medium is-dark" max="100">Loading...</progress>
            </div>
            <div className="column" />
          </div>
        </div>
      </section>
    )
  }
}


export default LoadingContainer
