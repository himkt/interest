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

  createKeywords = () => {
    if (this.props.paper.Keywords == '') return ''

    return this.props.paper.Keywords
      .split(',')
      .map(
        (e: string, idx: number) =>
          <span key={idx} className='tag is-warn'>{e}</span>
      )
  }

  createAuthors = () => {
    return this.props.paper.Authors
      .trim()
      .replace(/,/g, ' and ')
  }

  createFirstAuthor = () => {
    return this.props.paper.Authors
      .trim()
      .split(',')[0]
      .split(' ').slice(-1)[0]
  }

  createGitHubIssueLink = () => {
    const issueLink = this.props.paper.IssueLink.trim()
    if (issueLink == '') return ''

    return (
      <a href={issueLink} target='_blank' style={{paddingRight: 0.5 + 'rem'}}>
        <span className='tag is-success is-light'>Issue</span>
      </a>
    )
  }

  createTitle = () => {
    return (
      <p className='card-header-title'>
        <a href={this.props.paper.PaperLink}>{this.props.paper.Title}</a>
      </p>
    )
  }

  render () {
    return (
      <div className='column'>
        <div className='card' key={this.props.idx}>
          <div className='card-header'>
            <p className='card-header-title'><time>Added: {this.props.paper.Timestamp}</time></p>
          </div>
          <div className='card-content'>
            {this.createTitle()}
            <p className='card-text'>{this.props.paper.Note}</p>
          </div>
          <footer className='card-footer'>
            <div className='card-footer-item'>
              <div className='tags are-medium'>
                <ModalButton
                  title={this.props.paper.Title}
                  firstAuthor={this.createFirstAuthor()}
                  authors={this.createAuthors()}
                  year={this.props.paper.Year}
                  source={this.props.paper.Source}
                  paperType={this.props.paper.PaperType}
                />
                {this.createGitHubIssueLink()}
                <span className='tag is-primary is-light'>{this.props.paper.SourceShort}</span>
                <span className='tag is-danger is-light'>{this.props.paper.Year}</span>
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
