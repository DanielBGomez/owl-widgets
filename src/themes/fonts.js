// Modules
import Styled from 'styled-components'
import PropTypes from 'prop-types'

// Configs
import colors from './colors'
import spacing from './spacing'

// Values
export const values = {
    // Main value (1em)
    default: spacing.m,
    em: spacing.m,
    p: spacing.m,

    sizes: {
        smallest: 0.625,
        smaller: 0.75,
        small: 0.875,
        normal: 1,
        big: 1.125,
        bigger: 1.25,
        biggest: 1.5
    },

    family: {
        main: "'Roboto', sans-serif",
        monospace: "monospace"
    }
}

// Elements
const Paragraph = Styled.p`
    text-align: ${({ align }) => align || 'left'};
    color: ${({ color }) => /^#[a-fA-F0-9]{6}$/.test(color) ? color : (colors[color] || colors.white)};
    font-size: ${({ size }) => typeof size == 'number' ? parseFloat(size) + 'em' : (values.sizes[size] ? values.sizes[size] + 'em' : size)};
`
Paragraph.propTypes = {
    color: PropTypes.string,
    align: PropTypes.oneOf(['left','center','right','justify']),
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}
Paragraph.defaultProps = {
    align: 'left',
    color: colors.white,
    size: values.sizes.small
}

// Exports
export default {
    Paragraph,
    Text: Paragraph // Alias
}