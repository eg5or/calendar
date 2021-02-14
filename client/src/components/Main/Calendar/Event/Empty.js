import React, {useState} from 'react';
import {
    Card,
    CardActions,
    CardContent,
    FormControl, FormControlLabel,
    FormLabel, InputLabel, MenuItem,
    Popover, Radio,
    RadioGroup, Select, Slider,
    TextField
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useFormik} from 'formik';
import {DateTimePicker} from '@material-ui/pickers';
import Preloader from '../../../../common/Preloader/Preloader';
const format = require('date-fns/format')


const Empty = ({year, month, hour, dayNumber, dragLeaveHandler, dragOverHandler, dropHandler,
                   createNewEvent, isLoading}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setDatePicker(new Date(year, month, dayNumber, hour))
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    /*'ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }*/
    // -----------------------------------------------------------------------------------------------------------------
    // Formik
    const formik = useFormik({
        initialValues: {
            eventName: '',
            tagName: 'default',
            duration: 1,
            eventDescription: '',
        }
    });
    // -----------------------------------------------------------------------------------------------------------------
    const [datePicker, setDatePicker] = useState(null)
    const handleChangeDate = (date) => {
        setDatePicker(date)
    }
    const onAddNewEvent = () => {
        createNewEvent(formik.values.eventName, formik.values.eventDescription, datePicker, formik.values.duration, formik.values.tagName)
        handleClose()
        formik.values.eventName = ''
        formik.values.eventDescription = ''
        formik.values.duration = ''
        formik.values.tagName = ''
    }
    console.log(year, month, dayNumber, hour)
    return <>
        <div onDrop={e => dropHandler(e, dayNumber, hour)}
             onDragOver={e => dragOverHandler(e, dayNumber, hour)}
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
                    {isLoading && <div className="loaderWrap">
                        <Preloader/>
                    </div>}
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
                    <Button onClick={onAddNewEvent} size="small">+ Добавить</Button>
                </CardActions>
            </Card>
        </Popover>
    </>
}

export default Empty