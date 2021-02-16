import {useFormik} from 'formik';
import React, {useState} from 'react';
import {
    FormControl, FormControlLabel,
    InputLabel,
    MenuItem, Radio,
    RadioGroup,
    Select,
    TextField
} from '@material-ui/core';
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
            <div className="edit">
                <div className="field edit__input">
                    <TextField
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
                    <FormControl  id="tagName" fullWidth onChange={formik.handleChange}>
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
                <Button fullWidth onClick={onSaveEvent} variant="contained" color="primary" size="medium">Сохранить</Button>
                <Button fullWidth onClick={() => {
                    onEdit(false)
                }} color="secondary" size="medium">Отмена</Button>
            </div>
    </>
}

export default EditEvent