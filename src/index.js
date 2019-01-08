import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3TV9KzYftbwV0gtWRZpTjMz9PSGHDU25705dbazQ_jmCYasQeL1YKP3jfZFY2kZ7PMWCYAVjLVG8h/pub?gid=0&single=true&output=tsv'


function toJSON(records) {
  records = records.map(function(record) {
    return record.split('\t')
  })

  var columns = records[0]
  var papers = records.slice(1,)

  var papers_json = papers.map(function(paper) {
    var dict = {}
    for (var i=0; i<columns.length; i++) dict[columns[i]] = paper[i]
    return dict
  })

  return papers_json;
}


function parseTSV(response) {
  console.log(response)
  var records = response.split('\n')
  var papers_json = toJSON(records);
  console.log(papers_json);
  return (
    <ul>
      {papers_json.map(function(paper, index){
        return (
          <ul key={index}>
            <li><a href={paper['link']}>{paper['title']}</a></li>
            <ul>
              <li> added: {paper['date'] } </li>
              <li> {paper['note']} </li>
            </ul>
          </ul>
        )
      })}
    </ul>
  )
}


class Paper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
    };
  }


  componentDidMount() {
    fetch(URL)
      .then(response => response.text())
      .then(data => parseTSV(data))
      .then(data => this.setState({ data }));
  }


  render() {
    if (this.state.data) {
      return <div> {this.state.data} </div>
    }
    else {
      return <div>Loading...</div>
    }
  }
}


ReactDOM.render(<Paper/>, document.getElementById('root'))
