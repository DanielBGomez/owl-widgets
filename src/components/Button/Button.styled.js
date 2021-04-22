// Modules
import Styled from 'styled-components'
import PropTypes from 'prop-types';
import { lighten } from 'polished'

// Configs
import { colors, spacing } from '../../themes'
const COLORS = {
    main: {
        text: colors.white,
        background: colors.main
    },
    secondary: {
        text: colors.white,
        background: colors.secondaryDarken
    },
    destructive: {
        text: colors.white,
        background: colors.red
    },
    hollow: {
        text: colors.white,
        background: colors.transparent
    },
    disabled: {
        text: colors.grayDark,
        background: colors.grayLighten_2
    }
}

// Elements
const Wrapper = Styled.div`
    width: 100%;
    user-select: none;
    color: ${ colors.white };
    transition: all 100ms linear;
    padding: ${ spacing.xs } ${ spacing.s };
    cursor: ${ ({ loading, disabled }) => loading ? 'wait' : ( disabled ? 'not-allowed' : 'pointer' ) };

    ${({ type, disabled, loading }) => {
        // Parse color
        const color = ( disabled || loading ) ? COLORS.disabled : ( COLORS[type] || COLORS.neutral )

        return `
            color: ${ color.text };
            background-color: ${ color.background };
            opacity: ${ disabled || loading ? '0.7' : '' };
            border: ${ type == 'hollow' && !(loading || disabled) ? color.text : colors.transparent } ${ spacing.xxxs } solid;

            ${!(disabled || loading) && `
                &:hover {
                    ${ type == 'hollow' ? `
                        color: ${ colors.grayDark_4 };
                    `: '' }
                    background-color: ${ lighten( 0.1, type == 'hollow' ? color.text : color.background ) };
                }
            `}
        `
    }}
`
Wrapper.propTypes = {
    // States
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    // Variants
    type: PropTypes.oneOf(Object.keys(COLORS))
}
Wrapper.defaultProps = {
    loading: false,
    disabled: false,
    type: 'main'
}

// Exports
export {
    Wrapper
}