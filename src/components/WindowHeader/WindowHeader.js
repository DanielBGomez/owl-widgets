// Modules
import React, {
    Component
} from 'react'
import PropTypes from 'prop-types'

// Elements
import {
    Wrapper,
    Icon,
    Controls,
    Minimize,
    Close,
    Title
} from './WindowHeader.styled'

// Docs
import Overwolf from '../../docs/overwolf'

/**
 * WindowHeader Component
 * 
 * @version 0.2.1
 * @author DanielBGomez <contact@danielbgomez.com>
 */
class WindowHeader extends Component {
    constructor(props){
        // Always call super first
        super(props)

        // State

        // Events
        // this.dragMove = () => Overwolf.windows.dragMove( this.props.windowId )
        this.minimize = () => Overwolf.windows.minimize( this.props.windowId )
        this.close = () => Overwolf.windows.close( this.props.windowId )
    }
    render(){
        return <Wrapper>
            <Icon />
            <Title>Owl Widgets { this.props.title ? '- ' + this.props.title : '' }</Title>
            <Controls>
                <Minimize onClick={ this.minimize } />
                <Close onClick={ this.close } />
            </Controls>
        </Wrapper>
    }
}

// Prop validations
WindowHeader.propTypes = {
    title: PropTypes.string
}

// Exports
export default WindowHeader
