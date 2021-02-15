import React, {useState} from 'react';
import {
    Card,
    CardActions,
    CardContent,
    FormControl, FormControlLabel, FormLabel,
    InputLabel,
    MenuItem,
    Popover, Radio, RadioGroup,
    Select,
    TextField
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {DateTimePicker} from '@material-ui/pickers';
import {useFormik} from 'formik';
import Preloader from '../../../../common/Preloader/Preloader';

const EditComponent = ({event, editEvent, onEdit, handleClose}) => {
    // -----------------------------------------------------------------------------------------------------------------
    // Formik
    const formik = useFormik({
        initialValues: {
            eventName: event.event,
            tagName: event.tag,
            duration: 1,
            eventDescription: event.descr,
        }
    });
    // -----------------------------------------------------------------------------------------------------------------
    const [datePicker, setDatePicker] = useState(event.dateStart)
    const handleChangeDate = (date) => {
        setDatePicker(date)
    }

    const onSaveEvent = () => {
        editEvent(event.id, formik.values.eventName, formik.values.eventDescription, datePicker, formik.values.duration, formik.values.tagName)
        onEdit(false)
        handleClose()
    }
    return <>
        <CardContent>
            <TextField
                id="eventName"
                label="Название мероприятия"
                value={formik.values.eventName}
                onChange={formik.handleChange}
                fullWidth
            />
            <Typography variant="h5" component="h2">
                <DateTimePicker
                    autoOk
                    ampm={false}
                    value={datePicker}
                    onChange={handleChangeDate}
                    id="dateCreate"
                    label="24h clock"

                />
            </Typography>
            <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="duration">Продолжительность</InputLabel>
                <Select
                    value={formik.values.duration}
                    onChange={formik.handleChange}
                    inputProps={{
                        name: 'duration',
                        id: 'duration',
                    }}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
            </FormControl>
            <FormControl component="fieldset" id="tagName" fullWidth onChange={formik.handleChange}>
                <FormLabel component="legend">Тег:</FormLabel>
                <RadioGroup row aria-label="position" name="tagName" defaultValue="default">
                    <FormControlLabel
                        value="important"
                        control={<Radio color="primary"/>}
                        label="Важное"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="default"
                        control={<Radio color="primary"/>}
                        label="Обычное"
                        labelPlacement="start"
                    />
                </RadioGroup>
            </FormControl>
            <TextField
                id="eventDescription"
                label="Описание"
                multiline
                rows={4}
                variant="outlined"
                value={formik.values.eventDescription}
                onChange={formik.handleChange}
                fullWidth
            />
        </CardContent>
        <CardActions>
            <Button onClick={onSaveEvent} size="small">Сохранить</Button>
            <Button onClick={() => {onEdit(false)}} size="small">Отмена</Button>
        </CardActions>
    </>
}


const Event = ({event, dragEndHandler, dragLeaveHandler, dragStartHandler, editEvent, deleteEventFromDb, isLoading}) => {
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
                    ? <EditComponent event={event} editEvent={editEvent} onEdit={onEdit} handleClose={handleClose}/>
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