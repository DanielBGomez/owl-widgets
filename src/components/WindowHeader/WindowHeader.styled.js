// Modules
import Styled from 'styled-components'

// Theme
import {
    colors,
    spacing
} from '../../themes'

// Icons
import Close from '@material-ui/icons/Close'

// Elements
const WindowHeaderWrapper = Styled.div`
    width: 100%;
    display: flex;
    height: ${ spacing.l };
    color: ${ colors.white };
    background-color: ${ colors.grayDark_4 };
`

const WindowControls = Styled.div`
    height: 100%;
    margin-left: auto;
    display: inline-flex;
    margin-right: ${ spacing.noSpace };
`

const WindowButton = Styled.div`
    margin: 0;
    height: 100%;
    cursor: pointer;
    align-items: center;
    display: inline-flex;
    width: ${ spacing.xl };
    justify-contents: center;
    transition: all 100ms linear;
`

const CloseWindow = Styled(WindowButton)`
    &:hover {
        background-color: ${ colors.red }
    }
`


// Exports
export {
    WindowHeaderWrapper,
    WindowControls,
    WindowButton,
    CloseWindow
}