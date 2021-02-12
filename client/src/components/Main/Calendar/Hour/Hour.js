import React from 'react';
import Event from '../Event/Event';


const Hour = ({item}) => {

    return <div className="timeline__hour">
        <div className="timeline__label">{item}</div>
    </div>
}

export default Hour