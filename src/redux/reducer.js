import tableRows from '../data/products'
import { UPDATE_ROW, FILTER_DATA } from './action_types'

const initialState = {
    data: tableRows,
    filteredData: [],
    useFilteredData: false,
    filterString: '',
    emptyState: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_DATA:
            const filteredData = state.data.filter(row => {
                if (row && row.name) {
                    return row.name.toLowerCase().includes(action.payload.filter.toLowerCase())
                }
            })
            if (filteredData.length > 0) {
                return {
                    ...state,
                    filteredData: filteredData,
                    useFilteredData: true,
                    filterString: action.payload.filter,
                    emptyState: false
                }
            } else {
                return {
                    ...state,
                    filteredData: [],
                    useFilteredData: false,
                    filterString: action.payload.filter,
                    emptyState: true
                }
            }
        case UPDATE_ROW:
            const targetRowId = action.payload.cell.row.original.id
            const targetRow = state.data.find(row => row.id === targetRowId)
            return {
                ...state,
                ...state.data,
                targetRow: {
                    [action.payload.prop]: action.payload.val
                }
            }

        default:
            return state;
    }

}

export default reducer;