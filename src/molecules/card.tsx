import React, { Component } from 'react'
import ModalButton from '../atoms/modal'


interface PaperInterface {
  timeStamp: string
  title: string
  authors: string
  isRead: string
  sourceShort: string
  year: string
  paperLink: string
  keywords: string
  note: string
  paperType: string
  issueLink: string
  source: string
}


interface Props {
  paper: PaperInterface
  idx: number
}


class Card extends Component<Props, {}> {

  constructor(props: any) {
    super(props)
  }

  createKeywords = () => {
    if (this.props.paper.keywords == '') return ''

    return this.props.paper.keywords
      .split(',')
      .map(
        (e: string, idx: number) =>
          <span key={idx} className='tag is-warn'>{e}</span>
      )
  }

  createAuthors = () => {
    return this.props.paper.authors
      .trim()
      .replace(/,/g, ' and ')
  }

  createFirstAuthor = () => {
    return this.props.paper.authors
      .trim()
      .split(',')[0]
      .split(' ').slice(-1)[0]
  }

  createGitHubIssueLink = () => {
    const issueLink = this.props.paper.issueLink.trim()
    if (issueLink == '') return ''

    return (
      <a href={issueLink} target='_blank' style={{ paddingRight: 0.5 + 'rem' }}>
        <span className='tag is-success is-light'>Issue</span>
      </a>
    )
  }

  createTitle = () => {
    return (
      <p className='card-header-title'>
        <a href={this.props.paper.paperLink}>{this.props.paper.title}</a>
      </p>
    )
  }

  render() {
    return (
      <div className='column is-3-desktop is-6-tablet'>
        <div className='card' key={this.props.idx}>
          <div className='card-header'>
            <p className='card-header-title'><time>Added: {this.props.paper.timeStamp}</time></p>
          </div>
          <div className='card-content'>
            {this.createTitle()}
            <p className='card-text'>{this.props.paper.note}</p>
          </div>
          <footer className='card-footer'>
            <div className='card-footer-item'>
              <div className='tags are-medium'>
                <ModalButton
                  title={this.props.paper.title}
                  firstAuthor={this.createFirstAuthor()}
                  authors={this.createAuthors()}
                  year={this.props.paper.year}
                  source={this.props.paper.source}
                  paperType={this.props.paper.paperType}
                />
                {this.createGitHubIssueLink()}
                <span className='tag is-primary is-light'>{this.props.paper.sourceShort}</span>
                <span className='tag is-danger is-light'>{this.props.paper.year}</span>
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
