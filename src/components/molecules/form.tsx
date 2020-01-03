import React, { Component, ChangeEvent } from 'react'


class Form extends Component<any, {}> {

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.onFilterVal(e.currentTarget.value)
  }

  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Named Entity Recognition"
          onChange={this.handleInputChange} />
      </div>
    )
  }
}


export default Form
