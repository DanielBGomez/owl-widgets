// Modules
import Styled from 'styled-components'
import PropTypes from 'prop-types'

// Configs
import { spacing } from '../../themes'

// Elements
const ButtonsWrapper = Styled.div`
    width: 100%;
    display: flex;

    > * {
        ${({ buttons }) => `
            width: calc( ${ 100 / buttons }% - ${ ( spacing.number.m - spacing.number.m / buttons ) }px );

            &:not(:last-child) {
                margin-right: ${ spacing.m };
            }
        `}
    }
`
ButtonsWrapper.propTypes = {
    buttons: PropTypes.number
}
ButtonsWrapper.defaultProps = {
    buttons: 1
}

// Exports
export {
    ButtonsWrapper
}