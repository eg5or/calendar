import React from 'react';
import Day from './Day/Day';


const Calendar = (props) => {
    const today = new Date()
    const days = []
    const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    for (let i = 0; i < 7; i++) {
        const createDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i)
        const day = createDay.getDate()
        const weekDay = weekDays[createDay.getDay()]
        days.push([day, weekDay])
    }
    const daysElements = days.map((item, index) => {
        const newArr = props.data.filter(event => event.dateStart.getDate() === item[0])
        return <Day key={index}
                    dayNumber={item[0]}
                    dayOfWeek={item[1]}
                    events={newArr}
                    dragStartHandler={dragStartHandler}
                    dragEndHandler={dragEndHandler}
                    dragOverHandler={dragOverHandler}
                    dragLeaveHandler={dragLeaveHandler}
                    dropHandler={dropHandler}
        />
    })

    function dragLeaveHandler(e) {
        e.target.style.backgroundColor = null
    }

    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.backgroundColor = 'lightgray'
    }

    function dropHandler(e, dayNumber, hour) {
        e.preventDefault()
        const targetDay = e.target.id.split('_')[1]
        const targetHour = e.target.id.split('_')[2]
        console.log('targetDay', targetDay)
        console.log('targetHour', targetHour)
        e.target.style.backgroundColor = null
    }

    function dragStartHandler(e, id) {
        e.target.style.opacity = '0'
        console.log('Start', id)
    }

    function dragEndHandler(e) {
        e.target.style.opacity = '1'
    }
    return <div className="calendar-wrapper">
        {daysElements}
        {/*<div className="events-layer">
            <div className="element"
                 onDragStart={(e) => dragStartHandler(e)}
                 onDragLeave={(e) => dragLeaveHandler(e)}
                 onDragEnd={(e) => dragEndHandler(e)}
                 onDragOver={(e) => dragOverHandler(e)}
                 onDrop={(e) => dropHandler(e)}
                 draggable={true}
            >123</div>
        </div>*/}
    </div>
}

export default Calendar