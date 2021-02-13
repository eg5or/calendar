import React from 'react';
import Hour from '../Hour/Hour';
import Event from '../Event/Event';
import Empty from '../Event/Empty';


const Day = ({dayNumber, weekDay, timeline, dropHandler, dragEndHandler, dragLeaveHandler, dragOverHandler, dragStartHandler}) => {


    const hourElements = timeline.map((item, index) => {
        let hourLabel = ''
        item.hour < 10 ? hourLabel = '0' + item.hour : hourLabel = item.hour.toString()
        return <Hour key={index} hourLabel={hourLabel} />
    })

    const elements = timeline.map((item, index) => {
        switch (item.status) {
            case 'empty':
                return <Empty key={index}
                              hour={item.hour}
                              dayNumber={dayNumber}
                              dragOverHandler={dragOverHandler}
                              dragLeaveHandler={dragLeaveHandler}
                              dropHandler={dropHandler}
                />
                break
            case 'event':
                return <Event key={index}
                              event={item.data}
                              dragStartHandler={dragStartHandler}
                              dragEndHandler={dragEndHandler}
                              dragLeaveHandler={dragLeaveHandler}
                />
                break
            case 'filled':
                break
            default:
                break
        }
    })

    return <div id={`day_${dayNumber}`} className="day-container">
        <div className="day-container__title">
            <div
                className={`${weekDay === 'Вс' || weekDay === 'Сб' ? 'day-of-week weekend' : 'day-of-week'}`}>{weekDay}</div>
            <div
                className={`${weekDay === 'Вс' || weekDay === 'Сб' ? 'day-number weekend-number' : 'day-number'}`}>{dayNumber}</div>
        </div>
        <div className="timeline">
            <div className="timeline__grid">{hourElements}</div>
            <div className="events-layer">
                <div className="events">{elements}</div>
            </div>

        </div>
    </div>
}

export default Day