import * as React from 'react';


class Footer extends React.Component<any> {

  render () {
    return (
      <footer className="footer" style={{backgroundColor: 'hsl(0, 0%, 95%)'}}>
        <div className="content has-text-centered">
          <span><a href="https://github.com/himkt/interest" target="_brank"><i className="fab fa-lg fa-github"></i> Interest</a></span>
        </div>
      </footer>
    );
  }
}

export default Footer;
