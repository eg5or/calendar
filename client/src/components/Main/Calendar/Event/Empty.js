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


const Empty = ({
                   year, month, hour, dayNumber, dragLeaveHandler, dragOverHandler, dropHandler,
                   createNewEvent, isLoading
               }) => {
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

    // -----------------------------------------------------------------------------------------------------------------
    // Formik
    const formik = useFormik({
        initialValues: {
            eventName: 'Новое мероприятие',
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
            <div className="popover-container">
                <div className="edit">
                    {isLoading && <div className="loaderWrap">
                        <Preloader/>
                    </div>}
                    <div className="field edit__input">
                        <TextField
                            autoFocus
                            onFocus={(e) => { e.target.select()}}
                            id="eventName"
                            label="Название мероприятия"
                            value={formik.values.eventName}
                            onChange={formik.handleChange}
                            fullWidth
                        />
                    </div>
                    <div className="field edit__dateTimePicker">
                        <DateTimePicker
                            fullWidth
                            autoOk
                            ampm={false}
                            value={datePicker}
                            format="HH:mm - d MMMM yyyy"
                            cancelLabel="отмена"
                            onChange={handleChangeDate}
                            id="dateCreate"
                            label="Начало мероприятия"
                            minutesStep={60}
                        />
                    </div>
                    <div className="field edit__duration">
                        <FormControl variant="standard" fullWidth>
                            <InputLabel htmlFor="duration">Продолжительность (часов)</InputLabel>
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
                    </div>
                    <div className="field edit__tag">
                        <FormControl component="fieldset" id="tagName" fullWidth onChange={formik.handleChange}>
                            <RadioGroup row aria-label="duration" name="tagName" defaultValue="default">
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
                    </div>
                    <div className="field edit__descr">
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
                    </div>
                </div>
                <div className="actionsButtons">
                    <Button fullWidth onClick={onAddNewEvent} variant="contained" color="primary" size="medium">+ Добавить</Button>
                </div>
            </div>
        </Popover>
    </>
}

export default Empty