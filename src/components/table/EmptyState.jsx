import React from 'react'
import styled from 'styled-components'
import img from '../../assets/img/empty_state.jpeg'

const Container = styled.div`
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    width: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Banner = styled.span`
    font-size: 34px;
    color: black;
    font-family: Georgia;
    font-weight: 900;
`

const Image = styled.div`
    background: url(${img});
    width: 300px;
    height: 300px;
    background-size: 300px;
`

const RenderEmptyState = ((filter) => {
    return (
        <Container>
            <Banner>NO {filter.str.toUpperCase()} FOR YOU </Banner>
            <Image />
        </Container>
    )
})

export default RenderEmptyState;
