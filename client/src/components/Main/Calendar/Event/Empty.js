import React from 'react';
import {Card, CardActions, CardContent, Popover} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const Empty = ({hour, dayNumber, dragLeaveHandler, dragOverHandler, dropHandler}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return <>
        <div onDrop={event => dropHandler(event, dayNumber, hour)}
             onDragOver={event => dragOverHandler(event, dayNumber, hour)}
             onDragLeave={(e) => dragLeaveHandler(e)}
             id={`dh_${dayNumber}_${hour}`}
             className="empty"
             onClick={handleClick}
        >
            + добавить мероприятие
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
                        Добавить мероприятие
                    </Typography>
                    <Typography variant="h5" component="h2">
                        дата
                    </Typography>
                    <Typography  color="textSecondary">
                        тег
                    </Typography>
                    <Typography variant="body2" component="p">
                        мероприятие
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

export default Empty