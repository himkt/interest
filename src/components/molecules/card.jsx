import React from 'react'
import PaperBadge from '../atoms/paperBadge'
import Popup from 'reactjs-popup'

type Props = {
    paper: any,
    idx: number
}


function extractVolumeNumber(paper_json) {
    let year_volume_number = paper_json['year'].split(',')
    let arr_size = year_volume_number.length

    if (arr_size === 2) {
        return [year_volume_number[1], '-1']
    }
    else if (arr_size === 3) {
        return [year_volume_number[1], year_volume_number[2]]
    }
    else {
        return ['-1', '-1']
    }
}


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


function createKey(paper_json) {
    let raw_authors = paper_json['authors'].split(',')
    let year = normalizeYear(paper_json)
    if (raw_authors.length > 0) {
        let first_author = raw_authors[0]
        first_author = first_author.split(' ')
        first_author = first_author.slice(-1)[0]
        return first_author + year
    }
}

function createPopup(paper_json) {
    let bibtex_item = ''
    let book_name = normalizeBookName(paper_json)

    if (paper_json['conference'].startsWith('j:')) {
        bibtex_item += '@article{' + createKey(paper_json) + ',<br>'
        bibtex_item += '&nbsp;&nbsp;journal={' + book_name + '},<br>'

        let [volume, number] = extractVolumeNumber(paper_json)
        
        if (volume !== '-1') {
            bibtex_item += '&nbsp;&nbsp;volume={' + volume + '},<br>'
        }
        if (number !== '-1') {
            bibtex_item += '&nbsp;&nbsp;number={' + number + '},<br>'
        }

    } else {
        bibtex_item += '@inproceedings{' + createKey(paper_json) + ',<br>'
        bibtex_item += '&nbsp;&nbsp;booktitle={Proceedings of ' +
            book_name + '},<br>'
    }

    let authors = paper_json['authors'].replace(/, /g, ' and ')
    bibtex_item += '&nbsp;&nbsp;author="' + authors + '",<br>'
    bibtex_item += '&nbsp;&nbsp;title={' + paper_json['title'] + '},<br>'
    bibtex_item += '&nbsp;&nbsp;year={' + normalizeYear(paper_json) + '},<br>'
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
        <div className="card-footer"> {createPopup(paper)} </div>
    </div>
)

export default Card
