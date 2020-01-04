import React from 'react'


interface Props {
  text: string
  badgeClass: string
}


class PaperBadge extends React.Component<Props, {}> {
  render () {
    return (
      <span className={this.props.badgeClass}>{this.props.text}</span>
    )
  }
}


export default PaperBadge
