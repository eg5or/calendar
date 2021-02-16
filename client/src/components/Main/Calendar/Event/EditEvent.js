import {useFormik} from 'formik';
import React, {useState} from 'react';
import {
    CardActions,
    CardContent,
    FormControl, FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem, Radio,
    RadioGroup,
    Select,
    TextField
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {DateTimePicker} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

const EditEvent = ({event, onEdit, editEvent, handleClose, duration}) => {
    // -----------------------------------------------------------------------------------------------------------------
    // Formik
    const formik = useFormik({
        initialValues: {
            eventName: event.event,
            tagName: event.tag,
            duration: duration,
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
                <RadioGroup row aria-label="duration" name="tagName" value={formik.values.tagName}>
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

export default EditEvent