import React from 'react'
import ReactDOM from 'react-dom'


const URL = 'https://docs.google.com/spreadsheets/d/e/' +
    '2PACX-1vQ3TV9KzYftbwV0gtWRZpTjMz9PSGHDU25705dbazQ_jmCYasQeL1YKP3jfZFY2kZ7PMWCYAVjLVG8h/' +
    'pub?gid=0&single=true&output=tsv'


function toList(filt) {
    return (
        <div>
            {filt.map((paper_json, index) => toHTML(paper_json, index))}
        </div>
    )
}


function toHTML(paper_json, index) {
    let list = []
    list.push(<li> added: {paper_json['date'] } </li>)
    list.push(<li> in {paper_json['conference'] || 'Unknown'} {paper_json['year']} </li>)

    return (
        <div class="card border-info mb-3" key={index}>
            <div class="card-header">
                { paper_json['conference'] || 'Unkown' }
            </div>
            <div class="card-body">
                <h5 class="card-title"> {paper_json['title']} </h5>
                <p class="card-text"> {paper_json['note'] }</p>
                <a href={ paper_json['link'] } class="btn btn-primary">Read the paper</a>
            </div>
            <ul>{list}</ul>
        </div>
    )
}


function toJSON(records) {
    let f_split = (r) => r.split('\t')

    var records_array = records.map(f_split)
    var columns = records_array[0]
    var papers = records_array.slice(1,)
    var papers_json = papers.map(function(paper) {
        var dict = {}
        for (var i=0; i<columns.length; i++) dict[columns[i]] = paper[i]
        return dict
    })

    return papers_json
}


function parseTSV(response) {
    var records = response.split('\n')
    records = records.map(function(record) {
        return record.trim()})

    var papers_json = toJSON(records)
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
