// Modules
import React, {
    Component,
    Fragment
} from 'react'
import PropTypes from 'prop-types'

// Elements
import {
    WindowHeaderWrapper,
    WindowControls,
    WindowButton,
    CloseWindow
} from './WindowHeader.styled'

// Icons
import Minimize from '@material-ui/icons/Minimize'
import Close from '@material-ui/icons/Close'

// Component
class WindowHeader extends Component {
    constructor(props){
        // Always call super first
        super(props)

        // State
    }
    render(){
        return <WindowHeaderWrapper>
            <WindowControls>
                <WindowButton>
                    <Minimize fontSize="small" />
                </WindowButton>
                <CloseWindow>
                    <Close fontSize="small" />
                </CloseWindow>
            </WindowControls>
        </WindowHeaderWrapper>
    }
}

// Exports
export default WindowHeader
