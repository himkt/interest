import React from 'react'


interface Props {
  authors: string
  sourceShort: string
  year: string
  paperLink: string
  keywords: string
  issueLink: string
}


const Tags = (props: Props) => {
  return (
    <div className='tags are-normal'>
      <a className='tag' href={props.paperLink}>Paper</a>
      { props.issueLink && <a className='tag' href={ props.issueLink }>Issue</a> }
      <span className='tag is-normal is-primary is-light'>{props.sourceShort}</span>
      <span className='tag is-danger is-light'>{props.year}</span>
      { props.keywords.split(',').map((e: string, idx: number) =>
      <span key={ idx } className='tag is-warm'>{ e }</span>
      ) }
    </div>
  )
}


export default Tags;
