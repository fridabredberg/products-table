import styled from 'styled-components'
import filter from '../../assets/img/filter.svg'
import styles from '../../assets/styleVariables'

const StyledInput = styled.input`
    border-radius: 4px;
    width: 100%;
    font-weight: ${styles.fontWeightLight};
    padding: 6px 12px 6px 34px;
    border: none;
    font-family: ${styles.font};
    background: white no-repeat 5px url(${filter});
`

export default StyledInput;
