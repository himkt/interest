import * as React from 'react';
import logo from '../../img/logo.png';


class Header extends React.Component<any> {

  render () {
    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://himkt.github.io/profile"><img src={logo} alt="himkt.github.io/profile" width="85" /></a>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item" href="https://himkt.github.io/profile">Home</a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Links</a>
                <div className="navbar-dropdown is-boxed is-right">
                  <a className="navbar-item" href="https://twitter.com/himkt">Twitter</a>
                  <a className="navbar-item" href="https://twitter.com/hyperparams">Twitter (en)</a>
                  <a className="navbar-item" href="https://github.com/himkt">GitHub</a>
                  <a className="navbar-item" href="https://note.com/himkt">Note</a>
                  <a className="navbar-item" href="https://qiita.com/klis">Qiita</a>
                  <a className="navbar-item" href="https://instagram.com/himamako">Instagram</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item is-active" href="https://himkt.github.io/profile/resume.pdf" target="_blank">Resume</a>
                  <a className="navbar-item is-active" href="https://himkt.github.io/interest">Interest</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

