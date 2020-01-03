import React from 'react'
import PaperBadge from '../atoms/paperBadge'


function normalizeYear(paper_json) {
  return paper_json['year'].split(',')[0]
}


function normalizeBookName(paper_json) {
  let book_name = paper_json['conference']
  if (book_name.startsWith('j:')) {
    return book_name.slice(2,)
  }
  else {
    return book_name
  }
}


const Card = ({ paper, idx }) => (
  <div className="card border-info mb-3" key={idx}>
    <div className="card-header text-muted">Added: {paper.date}</div>
    <div className="card-body">
      <h5 className="card-title">
        <a href={paper.link}>{paper.title}</a>
      </h5>
      <div className="headerComponent">
        <PaperBadge
          text={normalizeBookName(paper)}
          badgeClass="badge badge-info"
        />
        <PaperBadge
          text={normalizeYear(paper)}
          badgeClass="badge badge-success"
        />
      </div>
      <p className="card-text">{paper.note}</p>
    </div>
  </div>
)


export default Card
