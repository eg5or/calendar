import React from 'react';
import Hour from '../Hour/Hour';
import Event from '../Event/Event';
import Empty from '../Event/Empty';
import {Tooltip} from '@material-ui/core';

const Day = ({year, month, dayNumber, weekDay, timeline, dropHandler, dragEndHandler,
                 dragLeaveHandler, dragOverHandler, dragStartHandler, createNewEvent,
                 isLoading, editEvent, deleteEventFromDb}) => {

    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
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
                              year={year}
                              month={month}
                              dayNumber={dayNumber}
                              dragOverHandler={dragOverHandler}
                              dragLeaveHandler={dragLeaveHandler}
                              dropHandler={dropHandler}
                              createNewEvent={createNewEvent}
                              isLoading={isLoading}
                />
            case 'event':
                return <Event key={index}
                              event={item.data}
                              dragStartHandler={dragStartHandler}
                              dragEndHandler={dragEndHandler}
                              dragLeaveHandler={dragLeaveHandler}
                              editEvent={editEvent}
                              deleteEventFromDb={deleteEventFromDb}
                              isLoading={isLoading}
                />
            case 'filled':
                break
            default:
                break
        }
    })

    return <div id={`day_${dayNumber}`} className="day-container">
        <div className="day-container__title">
            {dayNumber === new Date().getDate() && month === new Date().getMonth() && <div className="day-container__today">
                <div className="today-text">Сегодня</div>
            </div>}
            <div className={`${weekDay === 'Вс' || weekDay === 'Сб' ? 'day-of-week weekend' : 'day-of-week'}`}>{weekDay}</div>
            <Tooltip title={months[month] || 'месяц'} placement="bottom">
                <div className={`${weekDay === 'Вс' || weekDay === 'Сб' ? 'day-number weekend-number' : 'day-number'}`}>{dayNumber}</div>
            </Tooltip>
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