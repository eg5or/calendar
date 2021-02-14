import React, {useEffect} from 'react';
import Day from './Day/Day';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {
    addEventsToCellsList,
    changeEventPosition, createNewEvent, deleteEventFromDb, editEvent,
    getDataEvents,
    setDatesToTable
} from '../../../redux/calendarReducer';

const Calendar = (props) => {
    useEffect(() => {
        if (props.initialized) {
            props.setDatesToTable()
        }
    }, [])
    const daysElements = props.cellsList.map((item, index) => {
        return <Day key={`${index}`}
                    year={item.year}
                    month={item.month}
                    dayNumber={item.dayNumber}
                    weekDay={item.weekDay}
                    timeline={item.timeline}
                    dragStartHandler={dragStartHandler}
                    dragEndHandler={dragEndHandler}
                    dragOverHandler={dragOverHandler}
                    dragLeaveHandler={dragLeaveHandler}
                    dropHandler={dropHandler}
                    createNewEvent={props.createNewEvent}
                    editEvent={props.editEvent}
                    deleteEventFromDb={props.deleteEventFromDb}
                    isLoading={props.isLoading}
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

    function dragOverHandler(e, dayNumber, hour) {
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
        e.target.style.flexBasis = '30px'
        if (droppedEventId && newDateDroppedEvent && durationDroppedEvent && oldDateStartDroppedEvent && droppedEventData) {
            props.changeEventPosition(droppedEventId, newDateDroppedEvent, durationDroppedEvent, oldDateStartDroppedEvent, droppedEventData)
        }
    }

    return <div className="calendar-wrapper">
        {props.isLoadingTable && <div className="loaderWrap">
        </div>}
        {daysElements}
    </div>
}

const mapStateToProps = (state) => ({
    isLoading: state.calendar.isLoading,
    isLoadingTable: state.calendar.isLoadingTable,
    cellsList: state.calendar.cellsList,
    initialized: state.app.initialized,
})

export default compose(
    connect(mapStateToProps, {
        setDatesToTable,
        getDataEvents,
        addEventsToCellsList,
        changeEventPosition,
        createNewEvent,
        editEvent,
        deleteEventFromDb
    })
)(Calendar)