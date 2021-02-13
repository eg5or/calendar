import React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    FormControl, FormControlLabel,
    FormLabel,
    Popover, Radio,
    RadioGroup,
    TextField
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';


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
    const today = new Date()
    const todayYear = today.getFullYear()
    const todayMonth = today.getMonth()
    const dateCreate = new Date(todayYear, todayMonth, dayNumber, hour).toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    })
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

                        <TextField
                            id="event-name"
                            label="Название мероприятия"
                            fullWidth
                        />

                    <Divider variant="middle" />
                        <Typography variant="h5" component="h2">
                            {dateCreate}
                        </Typography>
                    <Divider variant="middle" />
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Тег:</FormLabel>
                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                <FormControlLabel
                                    value="important"
                                    control={<Radio color="primary"/>}
                                    label="Важное"
                                    labelPlacement="important"
                                />
                                <FormControlLabel
                                    value="default"
                                    control={<Radio color="primary"/>}
                                    label="Обычное"
                                    labelPlacement="default"
                                />
                            </RadioGroup>
                        </FormControl>
                    <Divider variant="middle" />
                        <TextField
                            id="event-description"
                            label="Описание"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                        />
                </CardContent>
                <CardActions>
                    <Button size="small">+ Добавить</Button>
                </CardActions>
            </Card>
        </Popover>
    </>
}

export default Empty