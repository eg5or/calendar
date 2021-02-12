import React from 'react';
import Hour from '../Hour/Hour';
import Event from '../Event/Event';
import Empty from '../Event/Empty';


const Day = ({dayOfWeek, dayNumber, events, dropHandler, dragEndHandler, dragLeaveHandler, dragOverHandler, dragStartHandler}) => {

    const hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
        '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
    const hourElements = hours.map((item, index) => {
        const newArr = events.filter(event => event.dateStart.getHours() === +item)
        return <Hour key={index} item={item} events={newArr}/>
    })
    const resultArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]


    events.forEach(item => {
        const startHour = item.dateStart.getHours()
        const endHour = item.dateEnd.getHours()
        const duration = endHour - startHour + 1

        resultArray.splice(resultArray.indexOf(startHour), duration, item)
    })

    console.log(resultArray)
    const elements = resultArray.map(item => {
        if (typeof item === 'number') {
            return <Empty hour={item}
                          dayNumber={dayNumber}
                          dragOverHandler={dragOverHandler}
                          dragLeaveHandler={dragLeaveHandler}
                          dropHandler={dropHandler}
            />
        } else {
            return <Event event={item}
                          dragStartHandler={dragStartHandler}
                          dragEndHandler={dragEndHandler}
                          dragLeaveHandler={dragLeaveHandler}
            />
        }
    })

    return <div id={`day_${dayNumber}`} className="day-container">
        <div className="day-container__title">
            <div
                className={`${dayOfWeek === 'Вс' || dayOfWeek === 'Сб' ? 'day-of-week weekend' : 'day-of-week'}`}>{dayOfWeek}</div>
            <div
                className={`${dayOfWeek === 'Вс' || dayOfWeek === 'Сб' ? 'day-number weekend-number' : 'day-number'}`}>{dayNumber}</div>
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