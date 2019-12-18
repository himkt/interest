import React from 'react'


const PaperBadge = ({ text, badgeClass }) => (
    <div>
        <span className={badgeClass}>{text}</span>
    </div>
)

export default PaperBadge
