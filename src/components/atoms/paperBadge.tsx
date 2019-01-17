import React from 'react'


type Props = {
    text: string,
    badgeClass: string
}


const PaperBadge = ({ text, badgeClass }: Props) => (
    <div>
        <span className={badgeClass}>{text}</span>
    </div>
)


export default PaperBadge
