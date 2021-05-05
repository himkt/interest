import React from 'react'
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


const Card = (props: Props) => {

  const createKeywords = () => {
    if (props.paper.keywords == '') return ''

    return props.paper.keywords
      .split(',')
      .map(
        (e: string, idx: number) =>
          <span key={idx} className='tag is-warn'>{e}</span>
      )
  }

  const createAuthors = () => {
    return props.paper.authors
      .trim()
      .replace(/,/g, ' and ')
  }

  const createFirstAuthor = () => {
    return props.paper.authors
      .trim()
      .split(',')[0]
      .split(' ').slice(-1)[0]
  }

  const createGitHubIssueLink = () => {
    const issueLink = props.paper.issueLink.trim()
    if (issueLink == '') return ''

    return (
      <a href={issueLink} target='_blank' style={{ paddingRight: 0.5 + 'rem' }}>
        <span className='tag is-success is-light'>Issue</span>
      </a>
    )
  }

  const createTitle = () => {
    return (
      <p className='card-header-title'>
        <a href={props.paper.paperLink}>{props.paper.title}</a>
      </p>
    )
  }

  return (
    <div className='column is-3-desktop is-6-tablet'>
      <div className='card' key={props.idx}>
        <div className='card-header'>
          <p className='card-header-title'><time>Added: {props.paper.timeStamp}</time></p>
        </div>
        <div className='card-content'>
          {createTitle()}
          <p className='card-text'>{props.paper.note}</p>
        </div>
        <footer className='card-footer'>
          <div className='card-footer-item'>
            <div className='tags are-medium'>
              <ModalButton
                title={props.paper.title}
                firstAuthor={createFirstAuthor()}
                authors={createAuthors()}
                year={props.paper.year}
                source={props.paper.source}
                paperType={props.paper.paperType}
              />
              {createGitHubIssueLink()}
              <span className='tag is-primary is-light'>{props.paper.sourceShort}</span>
              <span className='tag is-danger is-light'>{props.paper.year}</span>
              {createKeywords()}
            </div>
          </div>
        </footer>
      </div>
    </div>
    )
}


export default Card
