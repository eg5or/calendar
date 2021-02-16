import React, {useState} from 'react';
import {Popover, Tooltip} from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import Button from '@material-ui/core/Button';
import Preloader from '../../../../common/Preloader/Preloader';
import EditEvent from './EditEvent';

const Event = ({
                   event,
                   dragEndHandler,
                   dragLeaveHandler,
                   dragStartHandler,
                   editEvent,
                   deleteEventFromDb,
                   isLoading
               }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setEditMode(false)
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const dateStart = new Date(event.dateStart)
    const dateEnd = new Date(event.dateEnd)

    const date = dateStart.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    const duration = dateEnd.getHours() - dateStart.getHours() + 1
    const [editMode, setEditMode] = useState(false)

    const onEdit = (bool) => {
        setEditMode(bool)
    }

    const onDeleteEvent = () => {
        handleClose()
        deleteEventFromDb(event.id)
    }

    return <>
        <div draggable={true}
             onDragStart={(e) => dragStartHandler(e, event.id, duration, dateStart, event)}
             onDragLeave={(e) => dragLeaveHandler(e)}
             onDragEnd={(e) => dragEndHandler(e)}
             className={`events__item tag-${event.tag}  container__size-${duration}`}
             onClick={handleClick}>
            {event.event}
        </div>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <div className={`popover-container ${event.tag === 'important' && 'important-bg'}`}>
                {event.tag === 'important' && <div className="important-icon">
                    <Tooltip title={event.tag === 'important' ? 'Важное' : 'Обычное'}><WarningIcon /></Tooltip>
                </div>}
                {isLoading && <div className="loaderWrap">
                    <Preloader/>
                </div>}
                {editMode
                    ? <EditEvent event={event}
                                 editEvent={editEvent}
                                 onEdit={onEdit}
                                 handleClose={handleClose}
                                 duration={duration}
                    />
                    : <div className="view-event">
                        <div className="field view-event__title">
                            {event.event}
                        </div>
                        <div className="field view-event__date">
                            {date}
                        </div>
                        <div className={`field view-event__time view-event__time_${event.tag === 'important' ? 'important' : 'default'}`}>
                            c {dateStart.getHours()}:00 до {dateEnd.getHours() + 1}:00
                        </div>
                        <div className="field view-event__descr">
                            {event.descr}
                        </div>
                        <div className="actionsButtons">
                            <Button fullWidth onClick={onDeleteEvent} color="secondary" size="medium">Удалить</Button>
                            <Button fullWidth onClick={() => {
                                onEdit(true)
                            }} color="primary" size="medium">Изменить</Button>
                        </div>
                    </div>
                }
            </div>
        </Popover>
    </>
}

export default Event