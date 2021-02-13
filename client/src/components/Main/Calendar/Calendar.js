import React, {useEffect} from 'react';
import Day from './Day/Day';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {checkAuth, login, logout, register, setResponseMessage} from '../../../redux/authReducer';
import {
    addEventsToCellsList,
    changeEventPosition,
    getDataEvents,
    setDatesToTable
} from '../../../redux/calendarReducer';


const Calendar = (props) => {
    useEffect(() => {
        const today = new Date()
        props.setDatesToTable(today)
        props.getDataEvents()
    },[])
    const daysElements = props.cellsList.map((item, index) => {
        return <Day key={`${index}`}
                    dayNumber={item.dayNumber}
                    weekDay={item.weekDay}
                    timeline={item.timeline}
                    dragStartHandler={dragStartHandler}
                    dragEndHandler={dragEndHandler}
                    dragOverHandler={dragOverHandler}
                    dragLeaveHandler={dragLeaveHandler}
                    dropHandler={dropHandler}
        />
    })
    let droppedEventId = null
    let newDateDroppedEvent = null
    let durationDroppedEvent = null
    let oldDateStartDroppedEvent = null
    let droppedEventData = null
    function dragLeaveHandler(e) {
        e.target.style.backgroundColor = null
    }

    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.backgroundColor = 'lightgray'
    }

    function dropHandler(e, dayNumber, hour) {
        e.preventDefault()
        const today = new Date()
        newDateDroppedEvent = new Date(today.getFullYear(), today.getMonth(), dayNumber, hour)
        e.target.style.backgroundColor = null
    }

    function dragStartHandler(e, id, duration, dateStart, event) {
        e.target.style.opacity = '0'
        droppedEventId = id
        durationDroppedEvent = duration
        oldDateStartDroppedEvent = dateStart
        droppedEventData = event
    }

    function dragEndHandler(e) {
        e.target.style.opacity = '1'
        props.changeEventPosition(droppedEventId, newDateDroppedEvent, durationDroppedEvent, oldDateStartDroppedEvent, droppedEventData)
    }
    return <div className="calendar-wrapper">
        {daysElements}
    </div>
}

const mapStateToProps = (state) => ({
    cellsList: state.calendar.cellsList,
})

export default compose(
    connect(mapStateToProps, {
        setDatesToTable,
        getDataEvents,
        addEventsToCellsList,
        changeEventPosition
    })
)(Calendar)