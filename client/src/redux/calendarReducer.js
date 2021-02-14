// constants
import {calendarAPI} from '../API/api';

const SET_DATE = 'calendar/calendar/SET_DATE'
const SET_DATA_EVENTS = 'calendar/calendar/SET_DATA_EVENTS'
const CHANGE_STATUS = 'calendar/calendar/CHANGE_STATUS'
const ADD_EVENT = 'calendar/calendar/ADD_EVENT'
const DELETE_EVENT = 'calendar/calendar/DELETE_EVENT'
const SET_FIRST_DAY = 'calendar/calendar/SET_FIRST_DAY'
const CLEAR_TABLE = 'calendar/calendar/CLEAR_TABLE'
const TOGGLE_IS_LOADING = 'calendar/calendar/TOGGLE_IS_LOADING'
const TOGGLE_IS_LOADING_TABLE = 'calendar/calendar/TOGGLE_IS_LOADING_TABLE'

// state
let initialState = {
    firstDay: new Date(),
    isLoading: false,
    isLoadingTable: false,
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
                        year: action.array[index][0],
                        month: action.array[index][1],
                        dayNumber: action.array[index][2],
                        weekDay: action.array[index][3],
                    })
                })
            }
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.bool
            }
        case TOGGLE_IS_LOADING_TABLE:
            return {
                ...state,
                isLoadingTable: action.bool
            }
        case SET_DATA_EVENTS:
            return {
                ...state,
                events: action.data
            }
        case SET_FIRST_DAY:
            return {
                ...state,
                firstDay: action.newDay
            }
        case CLEAR_TABLE:
            return {
                ...state,
                cellsList: [
                    ...state.cellsList.map((e, i) => {
                            return {
                                ...e, timeline: [...e.timeline.map((el, k) => {
                                        return {...el, data: null, status: 'empty'}
                                })
                                ]
                            }
                    }),
                ]
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
export const setFirstDay = (newDay) => ({type: SET_FIRST_DAY, newDay})
export const clearTable = () => ({type: CLEAR_TABLE})
export const toggleIsLoading = (bool) => ({type: TOGGLE_IS_LOADING, bool})
export const toggleIsLoadingTable = (bool) => ({type: TOGGLE_IS_LOADING_TABLE, bool})

// thunks
export const setDatesToTable = () => (dispatch, getState) => {
    dispatch(toggleIsLoadingTable(true))
    let newDate = getState().calendar.firstDay
    const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    const days = []
    for (let i = 0; i < 7; i++) {
        if (!newDate) {
            newDate = new Date()
        }
        const createDay = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + i)
        const year = createDay.getFullYear()
        const month = createDay.getMonth()
        const dayNumber = createDay.getDate()
        const weekDay = weekDays[createDay.getDay()]
        days.push([year, month, dayNumber, weekDay])
    }
    dispatch(setDate(days))
    dispatch(clearTable())
    dispatch(getDataEvents())
}

export const getDataEvents = () => async (dispatch) => {
    if (localStorage.getItem('token')) {
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
    dispatch(toggleIsLoadingTable(false))
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
    dispatch(deleteEvent(oldDateStart.getDate(), oldDateStart.getHours()))
    if (duration > 1) {
        for (let i = 1; i < duration; i++) {
            dispatch(changeStatus(oldDateStart.getDate(), oldDateStart.getHours() + i, 'empty'))
        }
    }
    dispatch(addEvent(newDate.getDate(), newDate.getHours(), droppedEventData))
}

export const changeEventPosition = (eventId, newDate, duration, oldDateStart, droppedEventData) => async (dispatch) => {
    const id = JSON.parse(localStorage.getItem('token')).id
    const token = JSON.parse(localStorage.getItem('token')).token
    dispatch(moveEvent(newDate, duration, oldDateStart, droppedEventData))
    await calendarAPI.changePosition(id, token, eventId, newDate, duration)
    dispatch(getDataEvents())
}

export const createNewEvent = (event, descr, dateStart, duration, tagName) => async (dispatch) => {
    dispatch(toggleIsLoading(true))
    const id = JSON.parse(localStorage.getItem('token')).id
    const token = JSON.parse(localStorage.getItem('token')).token
    await calendarAPI.addEvent(id, token, event, descr, dateStart, duration, tagName)
    dispatch(getDataEvents())
    dispatch(toggleIsLoading(false))
}

export const editEvent = (eventId, event, descr, dateStart, duration, tagName) => async (dispatch, getState) => {
    dispatch(toggleIsLoading(true))
    const id = JSON.parse(localStorage.getItem('token')).id
    const token = JSON.parse(localStorage.getItem('token')).token
    await calendarAPI.editEvent(id, token, eventId, event, descr, dateStart, duration, tagName)
    dispatch(setDatesToTable())
    dispatch(toggleIsLoading(false))
}
export const deleteEventFromDb = (eventId) => async (dispatch, getState) => {
    dispatch(toggleIsLoading(true))
    const id = JSON.parse(localStorage.getItem('token')).id
    const token = JSON.parse(localStorage.getItem('token')).token
    await calendarAPI.deleteEvent(id, token, eventId)
    dispatch(setDatesToTable())
    dispatch(toggleIsLoading(false))
}

export default calendarReducer