import styled from 'styled-components'
import arrow from '../../assets/img/drop-down.svg'
import styles from '../../assets/styleVariables'

const StyledSelect = styled.select`
    border: none;
    font-weight: 200;
    color: black;
    font-size: ${styles.fontSizeSmall};
    width: 166px;
    font-family: ${styles.font};
    appearance: none;
    background: white no-repeat right url(${arrow});
`

export default StyledSelect;
