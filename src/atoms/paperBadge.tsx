import React from 'react'


interface Props {
  text: string
  badgeClass: string
}


const PaperBadge = (props: Props) => {
  return (
    <span className={props.badgeClass}>{props.text}</span>
  )
}


export default PaperBadge;
