// Modules
import Styled from 'styled-components'

// Configs
import {
    spacing,
    colors
} from '../../themes'


// Elements
const WindowBody = Styled.div`
    margin: 0;
    width: 100%;
    height: 100%;
    padding: ${ spacing.l };
`

const SectionTitle = Styled.div`
    font-size: 1rem;
    text-align: left;
    margin-bottom: ${ spacing.s };
    color: ${ colors.grayLighten };
`

// Exports
export {
    WindowBody,
    SectionTitle
}