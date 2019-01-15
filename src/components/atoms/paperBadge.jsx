import React from "react";

type Props = {
  text: string,
  badgeClass: string
};

function createKey (paper_json) {
    let raw_authors = paper_json['authors'].split(',')
    if (raw_authors.length > 0) {
        let first_author = raw_authors[0]
        first_author = first_author.split(' ')
        first_author = first_author.slice(-1)[0]
        return first_author + paper_json['year']
    }
}


function createPopup (paper_json) {
    let bibtex_item = ''

    if (paper_json['conference'].startsWith('j:')) {
        let journal_name = paper_json['conference'].slice(2, )
        bibtex_item += '@article{' + createKey(paper_json) + ',<br>'
        bibtex_item += '&nbsp;&nbsp;journal={' + journal_name + '},<br>'
    }
    else {
        createKey(paper_json)
        bibtex_item += '@inproceedings{' + createKey(paper_json) + ',<br>'
        bibtex_item += '&nbsp;&nbsp;booktitle={Proceedings of ' + paper_json['conference'] + '},<br>'
    }

    let authors = paper_json['authors'].replace(/, /g, ' and ')
    bibtex_item += '&nbsp;&nbsp;author="' + authors + '",<br>'
    bibtex_item += '&nbsp;&nbsp;title={' + paper_json['title'] + '},<br>'
    bibtex_item += '}'

    let ret = {__html: bibtex_item}

    return (
        <Popup trigger={<button class="btn btn-info"> BibTex export </button>} modal>
            <div dangerouslySetInnerHTML={ret} />
        </Popup>
    )
}

const PaperBadge = ({ text, badgeClass }: Props) => (
  <div>
    <span className={badgeClass}>{text}</span>
  </div>
);

export default PaperBadge;
