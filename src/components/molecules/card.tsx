import React, { Component } from 'react'
import ModalButton from '../atoms/modal'


interface Props {
  paper: any
  idx: number
}


class Card extends Component<Props, {}> {

  constructor (props: any) {
    super(props)
  }

  createKeywords () {
    if (this.props.paper.Keywords == "") return ""

    return this.props.paper.Keywords
      .split(",")
      .map(
        (e: string, idx: number) =>
          <span key={idx} className="tag is-warn">{e}</span>
      )
  }

  render () {
    return (
      <div className="column">
        <div className="card" key={this.props.idx}>
          <ModalButton
            title={this.props.paper['Title']}
            year={this.props.paper['Year']}
            source={this.props.paper['Source']}
            paperType={this.props.paper['Paper type']}
          />
          <div className="card-content">
            <p className="card-header-title"><a href={this.props.paper.Link}>{this.props.paper.Title}</a></p>
            <time>Added: {this.props.paper.Timestamp}</time>
          </div>
          <div className="card-content">
            <p className="card-text">{this.props.paper.Note}</p>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <div className="tags are-medium">
                <span className="tag is-success is-light"><a href={this.props.paper['Issue link']} target="_blank">Issue</a></span>
                <span className="tag is-primary is-light">{this.props.paper.Source_short}</span>
                <span className="tag is-danger is-light">{this.props.paper.Year}</span>
                {this.createKeywords()}
              </div>
           </div>
          </footer>
        </div>
      </div>
    )
  }
}


export default Card
