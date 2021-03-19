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

/**
 * WindowHeader Component
 * 
 * @version 0.2.0
 * @author DanielBGomez <contact@danielbgomez.com>
 */
class WindowHeader extends Component {
    constructor(props){
        // Always call super first
        super(props)

        // State
    }
    render(){
        return <Wrapper>
            <Icon />
            <Title>Owl Widgets { this.props.title ? '- ' + this.props.title : '' }</Title>
            <Controls>
                <Minimize />
                <Close />
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
