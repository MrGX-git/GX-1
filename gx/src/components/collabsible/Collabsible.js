
import { useState } from 'react';

import './collabsible.css';

export const Collabsible =({ closedTitle, oependTitle, isOpen = true, children, className })=> {
    const [opend, setOpend] = useState(isOpen)
    return (
        <div className={`box shadow p-3 my-3 ${className}`}>
            <h2 style={{
                  cursor: 'pointer',
                }}
                className = 'text-muted fs-2'
                onClick={ ()=> setOpend(!opend)}
            >
                { opend ? oependTitle : closedTitle}
            </h2>
            <div className={`col-12 collabsible-content ${opend ? 'opend' : ''}`}>
                {opend ? children : null}
            </div>
        </div>
    )
}