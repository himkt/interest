import React from 'react'
import PaperBadge from '../atoms/paperBadge'
import Popup from 'reactjs-popup'

type Props = {
    paper: any,
    idx: number
}

function createKey(paper_json) {
    let raw_authors = paper_json['authors'].split(',')
    if (raw_authors.length > 0) {
        let first_author = raw_authors[0]
        first_author = first_author.split(' ')
        first_author = first_author.slice(-1)[0]
        return first_author + paper_json['year']
    }
}

function createPopup(paper_json) {
    let bibtex_item = ''

    if (paper_json['conference'].startsWith('j:')) {
        let journal_name = paper_json['conference'].slice(2)
        bibtex_item += '@article{' + createKey(paper_json) + ',<br>'
        bibtex_item += '&nbsp;&nbsp;journal={' + journal_name + '},<br>'
    } else {
        createKey(paper_json)
        bibtex_item += '@inproceedings{' + createKey(paper_json) + ',<br>'
        bibtex_item +=
            '&nbsp;&nbsp;booktitle={Proceedings of ' +
            paper_json['conference'] +
            '},<br>'
    }

    let authors = paper_json['authors'].replace(/, /g, ' and ')
    bibtex_item += '&nbsp;&nbsp;author="' + authors + '",<br>'
    bibtex_item += '&nbsp;&nbsp;title={' + paper_json['title'] + '},<br>'
    bibtex_item += '}'

    let ret = { __html: bibtex_item }

    return (
        <Popup
            trigger={<button class="btn btn-info"> BibTex export </button>}
            modal
        >
            <div dangerouslySetInnerHTML={ret} />
        </Popup>
    )
}

const Card = ({ paper, idx }: Props) => (
    <div className="card border-info mb-3" key={idx}>
        <div className="card-header text-muted">Added: {paper.date}</div>
        <div className="card-body">
            <h5 className="card-title">
                <a href={paper.link}>{paper.title}</a>
            </h5>
            <div className="headerComponent">
                {createPopup(paper)}
                <PaperBadge
                    text={paper.conference}
                    badgeClass="badge badge-info"
                />
                <PaperBadge
                    text={paper.year}
                    badgeClass="badge badge-success"
                />
            </div>
            <p className="card-text">{paper.note}</p>
        </div>
    </div>
)

export default Card
