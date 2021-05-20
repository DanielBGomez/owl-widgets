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
 * @version 0.4.0
 * @author DanielBGomez <contact@danielbgomez.com>
 */
class WindowHeader extends Component {
    constructor(props){
        // Always call super first
        super(props)

        // State
        this.state = {
            loading: false
        }

        // Events
        this.dragMove = () => Overwolf.windows.dragMove( this.props.windowId )
        this.minimize = () => Overwolf.windows.minimize( this.props.windowId )
    }
    /**
     * The render function
     */
    render(){
        return <Wrapper onMouseDown={ this.dragMove }>
            <Icon />
            <Title>Owl Widgets { this.props.title ? '- ' + this.props.title : '' }</Title>
            <Controls>
                {!this.props.hideMinimize ?
                    <Minimize onClick={ this.minimize } />
                    : ''
                }
                <Close disabled={ Boolean( this.props.disabled || this.disableClose || this.state.loading ) } onClick={ this.close.bind(this) } />
            </Controls>
        </Wrapper>
    }
    async close(){
        // Ignore if already loading
        if(this.state.loading) return;

        // Setup loading state
        this.setState({
            loading: true
        })

        try {
            // Has pre-close listener?
            if(typeof this.props.beforeWindowClose == 'function'){
                // Execute and await
                const preventClose = await this.props.beforeWindowClose()
                // Exit if the function resolves true
                if(preventClose) return this.setState({ loading: false });
            }

            // Close window
            Overwolf.windows.hide( this.props.windowId, Result => {
                // Has post-close listener?
                if(typeof this.props.onWindowClose == 'function'){
                    // Execute with WindowResult (from close method) as params
                    this.props.onWindowClose(Result)
                }
            })

        } catch(err){
            // Crash app
            console.error(err)
        }
    }
}

// Prop validations
WindowHeader.propTypes = {
    // States
    disabled: PropTypes.bool,
    disableClose: PropTypes.bool,
    // Controls
    hideMinimize: PropTypes.bool,
    // Contents
    title: PropTypes.string,
    // Listeners
    beforeWindowClose: PropTypes.func,
    onWindowClose: PropTypes.func
}

// Defaults
WindowHeader.defaultProps = {
    hideMinimize: false
}

// Exports
export default WindowHeader
