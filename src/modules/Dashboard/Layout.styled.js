// Modules
import Styled from 'styled-components'

// Configs
import {
    spacing,
    colors
} from '../../themes'


// Elements
const SectionTitle = Styled.div`
    font-size: 1rem;
    text-align: left;
    user-select: none;
    margin-bottom: ${ spacing.s };
    color: ${ colors.grayLighten };
`

// Exports
export {
    SectionTitle
}