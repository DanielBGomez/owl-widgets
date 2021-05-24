// Modules
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// Docs
import Overwolf from '../../docs/overwolf'

// Theme
import { DefaultThemeGlobals, fonts, spacing } from '../../themes'
const { Text } = fonts

// Components
import WindowHeader from '../../components/WindowHeader'
import WindowBody from '../../components/WindowBody'
import Button from '../../components/Button'

// Elements
import { ButtonsWrapper } from './Layout.styled'

/**
 * Modal module component
 * 
 * @version 0.3.0
 * @author DanielBGomez <contact@danielbgomez.com>
 */
class Modal extends Component {
    constructor(props){
        // Always call super
        super(props)

        // Store appData
        this.windowId = this.props.windowId
        this.appData = this.props.appData

        // State
        this.state = {
            loading: false
        }

        // Vars
        this.buttons = [];
    }

    // React events
    componentDidMount = () => Modal.updateWindowSize(this.windowId)
    componentDidUpdate = () => setTimeout(() => Modal.updateWindowSize(this.windowId), 50)

    /**
     * Modal button click handler
     * 
     * @param {Number} index Button index 
     */
     async buttonClick(index){
        // Ignore if already loading
        if(this.state.loading) return;

        // Has an callback?
        const callback = this.props.type == 'choice' ? ( 
                    index ?
                        this.props.onConfirm
                        : this.props.onCancel
                ) : this.props.onConfirm

        // Await callback
        try {
            await callback()
        } catch(err){
            // Ignore errors here
        }

        // Close window
        Overwolf.windows.hide( this.windowId, this.props.reset )
    }

    /**
     * Update the window size with the document body size
     * 
     * @param {string} windowId
     */
    static updateWindowSize(windowId){
        // Get body size
        const width = document.body.offsetWidth
        const height = document.body.offsetHeight
        // Change size
        Overwolf.windows.changeSize({ window_id: windowId, width, height })
    }

    /**
     * The render function
     */
    render(){
        const {
            type,
            cancelLabel,
            confirmLabel,
            buttonLabel,
            buttonType
        } = this.props;

        // Parse type
        switch(type) {
            case 'choice':
                this.buttons = [
                    {
                        type: 'hollow',
                        label: cancelLabel || 'Cancel'
                    },
                    {
                        type: buttonType,
                        label: confirmLabel || 'Confirm'
                    }
                ]
                break
            case 'alert':
            default:
                this.buttons = [{
                    type: buttonType,
                    label: buttonLabel || 'Accept'
                }]
        }

        return <Fragment>
            <DefaultThemeGlobals fitContent />
            <WindowHeader hideMinimize windowId={ this.windowId } />
            <WindowBody fitContent>
                <Text>{ this.props.message }</Text>
                <ButtonsWrapper buttons={ this.buttons.length } style={{ marginTop: spacing.l }}>
                    { this.buttons.map( (button, index) => (
                        <Button key={index}
                            {...button}
                            disabled={ this.state.loading }
                            loading={ Boolean( this.state.loading === index ) }
                            onClick={ () => this.buttonClick(index) } />
                    )) }
                </ButtonsWrapper>
            </WindowBody>
        </Fragment>
    }
}

// Prop Types
Modal.propTypes = {
    // AppData
    appData: PropTypes.object.isRequired,
    windowId: PropTypes.string.isRequired,
    // Variants
    type: PropTypes.oneOf(['choice', 'alert']),
    // Contents
    message: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    cancelLabel: PropTypes.string,
    confirmLabel: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonType: PropTypes.string,
    // Events
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func
}

// Defaults
Modal.defaultProps = {
    type: 'alert',
    message: 'This is a test message'
}

// Export
export default Modal