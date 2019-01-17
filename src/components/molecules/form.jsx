import React, { Component } from "react";

export default class Form extends Component {
  filterVal() {
    const val = this.refs.myinput.value;
    this.props.onFilterVal(val);
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <input
            type="text"
            ref="myinput"
            className="form-control"
            placeholder="Named Entity Recognition"
            onKeyUp={this.filterVal.bind(this)}
          />
        </div>
      </div>
    );
  }
}
