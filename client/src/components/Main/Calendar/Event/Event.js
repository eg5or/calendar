import React, {useState} from 'react';
import {
    Card,
    CardActions,
    CardContent,
    Popover,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Preloader from '../../../../common/Preloader/Preloader';
import EditEvent from './EditEvent';

const Event = ({event, dragEndHandler, dragLeaveHandler, dragStartHandler, editEvent, deleteEventFromDb, isLoading}) => {
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
            <Card>
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
                    : <>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Мероприятие
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {date}
                            </Typography>
                            <Typography color="textSecondary">
                                c {dateStart.getHours()}:00 до {dateEnd.getHours()}:00
                                Тэг: {event.tag === 'important' ? 'Важное' : 'Обычное'}
                            </Typography>
                            <Typography variant="h6" component="h3">
                                {event.event}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {event.descr}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={onDeleteEvent} size="small">Удалить</Button>
                            <Button onClick={() => {
                                onEdit(true)
                            }} size="small">Изменить</Button>
                        </CardActions>
                    </>}
            </Card>
        </Popover>
    </>
}

export default Event