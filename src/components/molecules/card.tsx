import React, { Component } from 'react'
import PaperBadge from '../atoms/paperBadge'


type Props = {
  paper: any
  idx: number
}


class Card extends Component<Props, {}> {
  constructor (props: any) {
    super(props)
  }

  normalizeBookName () {
    return this.props.paper['conference']
  }

  normalizeYear () {
    return this.props.paper['year']
  }

  render () {
    return (
      <div className="card border-info mb-3" key={this.props.idx}>
        <div className="card-header text-muted">Added: {this.props.paper.date}</div>
        <div className="card-body">
          <h5 className="card-title">
            <a href={this.props.paper.link}>{this.props.paper.title}</a>
          </h5>
          <div className="headerComponent">
            <PaperBadge
              text={this.normalizeBookName()}
              badgeClass="badge badge-info"
            />
            <PaperBadge
              text={this.normalizeYear()}
              badgeClass="badge badge-success"
            />
          </div>
          <p className="card-text">{this.props.paper.note}</p>
        </div>
      </div>
    )
  }
}


export default Card
