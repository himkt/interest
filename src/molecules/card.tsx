import React from 'react'
import ModalButton from '../atoms/modal'
import Tags from '../atoms/tags'


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

  const authors = () => {
    return props.paper.authors.trim().replace(/,/g, ' and ')
  }

  const firstAuthor = () => {
    return props.paper.authors.trim().split(',')[0].split(' ').slice(-1)[0]
  }

  return (
    <div>
      <div className='message is-link' key={props.idx}>
        <div className='message-header'>
          <p>{ props.paper.title }</p>
          <ModalButton
            title={props.paper.title}
            firstAuthor={ firstAuthor() }
            authors={ authors() }
            year={props.paper.year}
            source={props.paper.source}
            paperType={props.paper.paperType}
          />
        </div>
        <div className='message-body'>
          <p>{props.paper.note}</p>
          <Tags
            authors={ props.paper.authors }
            sourceShort={ props.paper.sourceShort }
            year={ props.paper.year }
            paperLink={ props.paper.paperLink }
            keywords={ props.paper.keywords }
            issueLink={ props.paper.issueLink }
          />
        </div>
      </div>
    </div>
  )
}


export default Card
