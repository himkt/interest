import React, { Component}  from 'react'


const myhero = {
  background: 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)'
}


class Header extends Component<{}, {}> {

  render () {
    return (
      <section className="hero is-primary is-large" style={myhero}>
        <div className="hero-body">
          <div className="container">
            <p className="title">Interest</p>
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
