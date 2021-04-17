import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setFilter } from '../../redux/actions'
import StyledInput from './StyledInput'

const Bar = styled.div`
    width: 100%;
    padding: 0.3rem;
    background-color: #5BA8E7;
`

const FilterBar = ({ setFilter }) => {
    const handleKeyUp = (e) => {
        setFilter(e.target.value)
    }

    return (
        <Bar>
            <StyledInput type="text" onKeyUp={handleKeyUp} placeholder="Filter by name" />
        </Bar>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (str) => dispatch(setFilter(str))
    }
}

export default connect(null, mapDispatchToProps)(FilterBar);
