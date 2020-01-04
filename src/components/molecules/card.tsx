import React, { Component } from 'react'
import PaperBadge from '../atoms/paperBadge'


interface Props {
  paper: any
  idx: number
}


class Card extends Component<Props, {}> {

  constructor (props: any) {
    super(props)
  }

  normalizeTimeStamp () {
    return this.props.paper['Timestamp']
  }

  normalizeBookName () {
    return this.props.paper['conference']
  }

  normalizeYear () {
    return this.props.paper['year']
  }

  render () {
    return (
      <div className="column">
        <div className="card" key={this.props.idx}>
          <div className="card-content">
            <p className="title"><a href={this.props.paper.link}>{this.props.paper.title}</a></p>
            <p className="subtitle">Added: {this.normalizeTimeStamp()}</p>
          </div>
          <div className="card-content">
            <p className="card-text">{this.props.paper.note}</p>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <button className="button is-info">BibTex</button>
            </div>
            <div className="card-footer-item">
              <div className="tags are-medium">
                <PaperBadge
                  text={this.normalizeBookName()}
                  badgeClass="tag is-info is-light" />
                <PaperBadge
                  text={this.normalizeYear()}
                  badgeClass="tag is-primary is-light" />
              </div>
           </div>
          </footer>
        </div>
      </div>
    )
  }
}


export default Card
