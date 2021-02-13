import React from 'react';
import {Card, CardActions, CardContent, Popover} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const Event = ({event, dragEndHandler, dragLeaveHandler, dragStartHandler}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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
            <CardContent>
                <Typography  color="textSecondary" gutterBottom>
                    Мероприятие
                </Typography>
                <Typography variant="h5" component="h2">
                    {date}
                </Typography>
                <Typography  color="textSecondary">
                    {dateStart.getHours()} - {dateEnd.getHours()} Тэг: {event.tag === 'important' ? 'Важное' : 'Обычное'}
                </Typography>
                <Typography variant="body2" component="p">
                    {event.event}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Удалить</Button>
                <Button size="small">Изменить</Button>
            </CardActions>
        </Card>
    </Popover>
    </>
}

export default Event