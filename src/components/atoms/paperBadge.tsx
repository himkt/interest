import * as React from 'react'


export interface Props {
  text: string
  badgeClass: string
}


class PaperBadge extends React.Component<Props, {}> {
  render () {
    return (
      <div>
        <span className={this.props.badgeClass}>{this.props.text}</span>
      </div>
    )
  }
}


export default PaperBadge
