import React from 'react';
import Event from '../Event/Event';


const Hour = ({hourLabel}) => {

    return <div className="timeline__hour">
        <div className="timeline__label">{hourLabel}</div>
    </div>
}

export default Hour