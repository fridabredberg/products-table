import { FILTER_DATA, UPDATE_ROW } from './action_types'

export const setFilter = (str) => ({
    type: FILTER_DATA,
    payload: {
        filter: str
    }
})

export const updateRow = (cell, prop, val) => ({
    type: UPDATE_ROW,
    payload: {
        cell: cell,
        prop: prop,
        val: val
    }
})