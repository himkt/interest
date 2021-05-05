import React from 'react';
import logo from '../../img/logo.png';


const Header = () => {

  return (
    <nav className="navbar is-transparent is-info">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://himkt.github.io/profile"><img src={logo} alt="himkt.github.io/profile" width="93" /></a>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="https://himkt.github.io/profile">Profile</a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Links</a>
              <div className="navbar-dropdown is-boxed is-right">
                <a className="navbar-item" href="https://twitter.com/himkt">Twitter</a>
                <a className="navbar-item" href="https://twitter.com/himako_h">Twitter (en)</a>
                <a className="navbar-item" href="https://github.com/himkt">GitHub</a>
                <a className="navbar-item" href="https://speakerdeck.com/himkt">SpeakerDeck</a>
                <a className="navbar-item" href="https://himkt.medium.com">Medium (Blog)</a>
                <a className="navbar-item" href="https://note.com/himkt">Note (Blog in Japanese)</a>
                <a className="navbar-item" href="https://qiita.com/klis">Qiita (Tech blog in Japanese)</a>
                <a className="navbar-item" href="https://instagram.com/himamako">Instagram</a>
                <a className="navbar-item" href="https://www.linkedin.com/in/himkt/">LinkedIn</a>
                <hr className="navbar-divider" />
                <a className="navbar-item is-active" href="https://himkt.github.io/profile">profile</a>
                <a className="navbar-item is-active" href="https://himkt.github.io/interest">Interest</a>
                <a className="navbar-item is-active" href="https://himkt.github.io/profile/resume.pdf" target="_blank">Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default Header;
