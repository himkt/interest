import * as React from 'react';


class Footer extends React.Component<any> {

  render () {
    return (
      <footer className="footer" style={{backgroundColor: 'hsl(0, 0%, 95%)'}}>
        <div className="content has-text-centered">
          <p><strong>himkt.github.io</strong> by <a href="https://twitter.com/himkt">himkt</a>. 2017-2019</p>
          <span><a href="https://github.com/himkt/interest" target="_brank"><i className="fab fa-lg fa-github"></i></a></span>
        </div>
      </footer>
    );
  }
}

export default Footer;
