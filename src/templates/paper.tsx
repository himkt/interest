import React, { Component } from 'react'
import Card from '../molecules/card'
import Form from '../molecules/form'
import LoadingContainer from '../atoms/loading'


interface State {
  data: any | null
  filt: any | null
}


class Paper extends Component<{}, State> {

  private url: string = (
    'https://script.google.com/macros/s/'
    + 'AKfycbzh0Bz7rPAK9gcbjdJXpccEHTsfL5sQ4X9weX8CSVuwWS_TFF9i/exec'
  )

  constructor(props: {}) {
    super(props)

    this.state = {
      data: null,
      filt: null
    }

    this.filterContentsByQuery = this.filterContentsByQuery.bind(this)
  }

  componentDidMount() {
    fetch(this.url)
      .then(response => response.json())
      .then(data => this.setState({ data: data, filt: data }))
  }

  filterContentsByQuery(query: string) {
    if (this.state.data != null) {
      const filt = this.state.data.filter((paper: any) => {
        var item = ''
        for (var key in paper) item += paper[key] + ' '
        return item.toLowerCase().match(query.toLowerCase())
      }
      )
      this.setState({ filt })
    }
  }

  render() {

    if (!this.state.filt) {
      return (
        <LoadingContainer />
      )
    }

    return (
      <div>
        <Form updateContents={this.filterContentsByQuery} />
        <section style={{ padding: '3rem' }}>
          <div className="container">
            <div className="columns">
              {this.state.filt.map((paper: any, idx: number) => (
                <Card paper={paper} idx={idx} key={idx} />
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
}


export default Paper;
