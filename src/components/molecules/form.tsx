import React, { Component, ChangeEvent } from 'react'


interface Props {
  updateContents: (query: string) => void
}


class Form extends Component<Props, {}> {

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.updateContents(e.currentTarget.value)
  }

  render() {
    return (
      <section style={{padding: 1 + 'rem'}}>
        <div className="container">
          <div className="field">
            <label className="label">Query</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Named Entity Recognition"
                onChange={this.handleInputChange} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Form
