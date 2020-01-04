import React, { Component}  from 'react'


class Header extends Component<{}, {}> {

  render () {
    return (
      <section className="hero is-light is-medium">
        <div className="hero-body">
          <div className="container">
            <p className="title">Interest by <a href="https://twitter.com/himkt">himkt</a></p>
            <p className="subtitle">
              GitHub: <a href="https://github.com/himkt/interest">Here</a>
            </p>
          </div>
        </div>
      </section>
    )
  }
}


export default Header
