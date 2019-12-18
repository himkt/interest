import React, { Component } from 'react'
import parseTSV from '../../utils/parse'
import Card from '../molecules/card'
import Form from '../molecules/form'


const URL =
  'https://docs.google.com/spreadsheets/d/e/' +
  '2PACX-1vTxXqPAIbPCrFXn6zDo2Jv68vpdFJ7g1_xFJkpwM3kF4qH5rz3Fc_vXb1ReCCUenEknIQRvQm2tYGVG' +
  '/pub?gid=0&single=true&output=tsv'


export default class Paper extends Component {
  constructor(props) {
    super(props)
    this.handleFilterTextVal = this.handleFilterTextVal.bind(this)
    this.state = {
      data: null,
      filt: null
    }
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.text())
      .then(data => parseTSV(data))
      .then(filt =>
        this.setState({
          data: filt,
          filt
        })
      )
  }

  handleFilterTextVal(query) {
    query = query.toLowerCase()
    const filt = this.state.data.filter(
      paper =>
      paper.title.toLowerCase().match(query) ||
      paper.conference.toLowerCase().match(query) ||
      paper.note.toLowerCase().match(query) ||
      // paper['link'].toLowerCase().match(query) ||
      paper.year.match(query)
    )
    this.setState({ filt })
  }

  render() {
    if (this.state.filt) {
      return (
        <div>
          <Form onFilterVal={this.handleFilterTextVal} />
          <div className="card-columns">
            {this.state.filt.map((paper, idx) => (
              <Card paper={paper} idx={idx} />
            ))}
          </div>
        </div>
      )
    }
    return <div> Loading... </div>
  }
}
