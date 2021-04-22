// Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Elements
import { Wrapper } from './Button.styled'

/**
 * Button Component
 * 
 * @version 0.1.0
 * @author DanielBGomez <contact@danielbgomez.com>
 */
class Button extends Component {
    constructor(props){
        // Always call super
        super(props)
    }
    /**
     * The render function
     */
    render(){
        return <Wrapper {...this.props} onClick={ this.click.bind(this) }>
            { this.props.title || 'Button' }
        </Wrapper>
    }
    /**
     * Button click event
     */
    click(e){
        // Ignore if disabled or loading
        if(this.props.disabled || this.props.loading) return;
        // Execute click action
        if(typeof this.props.onClick == 'function') this.props.onClick(e)
    }
}

// Prop types
Button.propTypes = {
    // Spread Wrapper
    ...Wrapper.propTypes,
    // Text
    title: PropTypes.string,
    // Events
    onClick: PropTypes.func
}

// Defaults
Button.defaultProps = {
    // Spread Wrapper
    ...Wrapper.defaultProps
}

// Export
export default Button