// constants
import {authAPI, calendarAPI} from '../API/api';

const SET_DATE = 'calendar/calendar/SET_DATE'
const SET_DATA_EVENTS = 'calendar/calendar/SET_DATA_EVENTS'
const CHANGE_STATUS = 'calendar/calendar/CHANGE_STATUS'
const ADD_EVENT = 'calendar/calendar/ADD_EVENT'
const DELETE_EVENT = 'calendar/calendar/DELETE_EVENT'

// state
let initialState = {
    cellsList: [
        {
            dayNumber: null,
            weekDay: null,
            timeline: [
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 0,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 1,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 2,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 3,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 4,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 5,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 6,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 7,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 8,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 9,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 10,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 11,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 12,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 13,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 14,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 15,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 16,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 17,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 18,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 19,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 20,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 21,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 22,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 23,
                    data: null
                }
            ]
        },
        {
            dayNumber: null,
            weekDay: null,
            timeline: [
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 0,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 1,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 2,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 3,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 4,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 5,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 6,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 7,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 8,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 9,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 10,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 11,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 12,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 13,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 14,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 15,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 16,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 17,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 18,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 19,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 20,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 21,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 22,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 23,
                    data: null
                }
            ]
        },
        {
            dayNumber: null,
            weekDay: null,
            timeline: [
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 0,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 1,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 2,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 3,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 4,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 5,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 6,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 7,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 8,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 9,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 10,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 11,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 12,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 13,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 14,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 15,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 16,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 17,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 18,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 19,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 20,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 21,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 22,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 23,
                    data: null
                }
            ]
        },
        {
            dayNumber: null,
            weekDay: null,
            timeline: [
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 0,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 1,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 2,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 3,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 4,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 5,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 6,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 7,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 8,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 9,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 10,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 11,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 12,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 13,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 14,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 15,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 16,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 17,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 18,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 19,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 20,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 21,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 22,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 23,
                    data: null
                }
            ]
        },
        {
            dayNumber: null,
            weekDay: null,
            timeline: [
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 0,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 1,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 2,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 3,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 4,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 5,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 6,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 7,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 8,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 9,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 10,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 11,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 12,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 13,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 14,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 15,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 16,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 17,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 18,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 19,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 20,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 21,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 22,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 23,
                    data: null
                }
            ]
        },
        {
            dayNumber: null,
            weekDay: null,
            timeline: [
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 0,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 1,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 2,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 3,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 4,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 5,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 6,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 7,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 8,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 9,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 10,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 11,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 12,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 13,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 14,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 15,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 16,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 17,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 18,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 19,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 20,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 21,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 22,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 23,
                    data: null
                }
            ]
        },
        {
            dayNumber: null,
            weekDay: null,
            timeline: [
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 0,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 1,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 2,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 3,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 4,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 5,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 6,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 7,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 8,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 9,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 10,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 11,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 12,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 13,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 14,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 15,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 16,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 17,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 18,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 19,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 20,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 21,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 22,
                    data: null
                },
                {
                    status: 'empty', // 'empty' | 'filled'
                    hour: 23,
                    data: null
                }
            ]
        },

    ],
    events: []
}

// cases
const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATE:
            return {
                ...state,
                cellsList: state.cellsList.map((item, index) => {
                    return ({
                        ...item,
                        dayNumber: action.array[index][0],
                        weekDay: action.array[index][1],
                    })
                })
            }
        case SET_DATA_EVENTS:
            return {
                ...state,
                events: action.data
            }
        case CHANGE_STATUS:
            const dayNum = state.cellsList.findIndex(item => item.dayNumber === action.day)
            return {
                ...state,
                cellsList: [
                    ...state.cellsList.map((e, i) => {
                        if (i === dayNum) {
                            return {
                                ...e, timeline: [...e.timeline.map((el, k) => {
                                    if (k === action.hour) {
                                        return {...el, status: action.status}
                                    }
                                    return {...el}
                                })
                                ]
                            }
                        }
                        return {...e}
                    }),
                ]
            }
        case ADD_EVENT:
            const day = state.cellsList.findIndex(item => item.dayNumber === action.day)
            return {
                ...state,
                cellsList: [
                    ...state.cellsList.map((e, i) => {
                        if (i === day) {
                            return {
                                ...e, timeline: [...e.timeline.map((el, k) => {
                                    if (k === action.hour) {
                                        return {...el, data: action.event, status: 'event'}
                                    }
                                    return {...el}
                                })
                                ]
                            }
                        }
                        return {...e}
                    }),
                ]
            }
        case DELETE_EVENT:
            const dayDelete = state.cellsList.findIndex(item => item.dayNumber === action.day)
            return {
                ...state,
                cellsList: [
                    ...state.cellsList.map((e, i) => {
                        if (i === dayDelete) {
                            return {
                                ...e, timeline: [...e.timeline.map((el, k) => {
                                    if (k === action.hour) {
                                        return {...el, data: null, status: 'empty'}
                                    }
                                    return {...el}
                                })
                                ]
                            }
                        }
                        return {...e}
                    }),
                ]
            }
        default:
            return state
    }
}

// actioncreators
export const setDate = (array) => ({type: SET_DATE, array})
export const setDataEvents = (data) => ({type: SET_DATA_EVENTS, data})
export const changeStatus = (day, hour, status) => ({type: CHANGE_STATUS, day, hour, status})
export const addEvent = (day, hour, event) => ({type: ADD_EVENT, day, hour, event})
export const deleteEvent = (day, hour) => ({type: DELETE_EVENT, day, hour})

// thunks
export const setDatesToTable = (date) => (dispatch) => {
    const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    const days = []
    for (let i = 0; i < 7; i++) {
        const createDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + i)
        const dayNumber = createDay.getDate()
        const weekDay = weekDays[createDay.getDay()]
        days.push([dayNumber, weekDay])
    }
    dispatch(setDate(days))
}

export const getDataEvents = () => async (dispatch) => {
    const id = JSON.parse(localStorage.getItem('token')).id
    const token = JSON.parse(localStorage.getItem('token')).token
    try {
        const data = await calendarAPI.getEvents(id, token)
        dispatch(setDataEvents(data.data.events))
        dispatch(addEventsToCellsList())
    } catch (e) {
        console.log('Ошибка ', e)
    }
}

export const addEventsToCellsList = () => (dispatch, getState) => {

    const events = getState().calendar.events
    events.forEach(item => {
        const day = new Date(item.dateStart).getDate()
        const hourStart = new Date(item.dateStart).getHours()
        const hourEnd = new Date(item.dateEnd).getHours()
        const duration = hourEnd - hourStart + 1
        dispatch(addEvent(day, hourStart, item))
        if (duration > 1) {
            for (let i = 1; i < duration; i++) {
                dispatch(changeStatus(day, hourStart + i, 'filled'))
            }
        }
    })
}

export const moveEvent = (newDate, duration, oldDateStart, droppedEventData) => async (dispatch, getState) => {
    debugger
    dispatch(deleteEvent(oldDateStart.getDate(), oldDateStart.getHours()))
    if (duration > 1) {
        for (let i = 1; i < duration; i++) {
            dispatch(changeStatus(oldDateStart.getDate(), oldDateStart.getHours() + i, 'empty'))
        }
    }
    dispatch(addEvent(newDate.getDate(), newDate.getHours(), droppedEventData))
    if (duration > 1) {
        for (let i = 1; i < duration; i++) {
            dispatch(changeStatus(newDate.getDate(), newDate.getHours() + i, 'filled'))
        }
    }
}

export const changeEventPosition = (eventId, newDate, duration, oldDateStart, droppedEventData) => async (dispatch, getState) => {
    const id = JSON.parse(localStorage.getItem('token')).id
    const token = JSON.parse(localStorage.getItem('token')).token
    await calendarAPI.changePosition(id, token, eventId, newDate, duration)
    dispatch(moveEvent(newDate, duration, oldDateStart, droppedEventData))
    dispatch(getDataEvents())
}

export default calendarReducer