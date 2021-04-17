import React from 'react'
import styled from 'styled-components'
import styles from '../../assets/styleVariables'

const Header = styled.div`
    width: 100%;
    padding: 12px 0;
    text-align: center;
    font-weight: ${styles.fontWeightLight};
    color: white;
    background: linear-gradient(180deg,rgba(49,128,191,1) 0%,rgba(59,110,180,1) 75%,rgba(34,104,176,1) 100%);
`

const HeaderBar = () => {
    return (
        <Header>Products</Header>
    )
}

export default HeaderBar;
