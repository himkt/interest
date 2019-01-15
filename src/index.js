import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const URL = 'https://docs.google.com/spreadsheets/d/e/' +
    '2PACX-1vQ3TV9KzYftbwV0gtWRZpTjMz9PSGHDU25705dbazQ_jmCYasQeL1YKP3jfZFY2kZ7PMWCYAVjLVG8h/' +
    'pub?gid=0&single=true&output=tsv'


function createHeader(paper_json) {
    let result = []

    if (paper_json['conference'] ) {
        result.push(<span class='badge badge-info'> {paper_json['conference']} </span>)
    }
    if (paper_json['year'] ) {
        result.push(<span class='badge badge-success'> {paper_json['year']} </span>)
    }

    return <div class='headerComponent'> {result} </div>
}


function toList(filt) {
    return (
        <div>
            {filt.map((paper_json, index) => toHTML(paper_json, index))}
        </div>
    )
}


function toHTML(paper_json, index) {
    return (
        <div class="card border-info mb-3" key={index}>
            <div class="card-header text-muted">
                Added: {paper_json['date'] }
            </div>
            <div class="card-body">
                <h5 class="card-title"> <a href={paper_json['link']}> {paper_json['title']} </a></h5>
                { createHeader(paper_json) }
                <p class="card-text">{paper_json['note'] }</p>
            </div>
        </div>
    )
}


function toJSON(records) {
    let f_split = (r) => r.split('\t')
    let records_array = records.map(f_split)
    let columns = records_array[0]
    let papers = records_array.slice(1,)
    let papers_json = papers.map(function(paper) {
        let dict = {}
        for (var i=0; i<columns.length; i++) {
            dict[columns[i].trim()] = paper[i] || ''
        }
        return dict
    })
    return papers_json
}


function parseTSV(response) {
    let records = response.split('\n')
    records = records.map(function(record) {
        return record.replace(/\n$/, '')})
    let papers_json = toJSON(records)
    return papers_json
}


class Form extends React.Component {
    _filterVal() {
        const val = this.refs.myinput.value
        this.props.onFilterVal(val)
    }

    render() {
        return (
            <div><div class="form-group">
                <input type="text" ref="myinput" class="form-control"
                    placeholder="Named Entity Recognition"
                    onKeyUp={this._filterVal.bind(this)} />
            </div></div>
        )
    }
}


class Paper extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
            filt: null,
        }
    }


    handleFilterTextVal(query) {
        query = query.toLowerCase()
        const filt = this.state.data.filter(
            function(paper) {
                return (
                    paper['title'].toLowerCase().match(query) ||
                    paper['conference'].toLowerCase().match(query) ||
                    paper['note'].toLowerCase().match(query) ||
                    // paper['link'].toLowerCase().match(query) ||
                    paper['year'].match(query)
                )
            }
        )
        this.setState({filt: filt})
    }


    componentDidMount() {
        fetch(URL)
            .then(response => response.text())
            .then(data => parseTSV(data))
            .then(filt => this.setState({ data: filt, filt: filt }))
    }


    render() {
        if (this.state.filt) {
            return (
                <div>
                    <Form onFilterVal={this.handleFilterTextVal.bind(this)} />
                    <div class='card-columns'> {toList(this.state.filt)} </div>
                </div>
            )
        }
        else {
            return <div>Loading...</div>
        }
    }
}


ReactDOM.render(<Paper />, document.getElementById('root'))
