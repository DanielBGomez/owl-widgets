// Modules
import React, {
    Component
} from 'react'
import PropTypes from 'prop-types'

// Elements
import {
    Wrapper,
    CheckBox,
    Image,
    Texts,
    SettingsButton,
    TestButton
} from './WidgetCard.styled'

/**
 * WidgetCard Component
 * 
 * @version 0.2.0
 * @author DanielBGomez <contact@danielbgomez.com>
 */
class WidgetCard extends Component {
    constructor(props){
        // Always call super first
        super(props)

        // State
        // this.props.enableWidget()
    }
    render(){
        return <Wrapper onClick={ this.props.toggleWidget }>
            <CheckBox checked={ this.props.active } disabled={ this.props.disabled } />
            <Image image={ this.props.image } />
            <Texts>
                <div className="name">{ this.props.name || 'Nombre' }</div>
                <div className="version">{ this.props.version || 'v0.0.0' }</div>
            </Texts>
            <SettingsButton />
            <TestButton onClick={ this.test.bind(this) } />
        </Wrapper>
    }
    /**
     * Trigger the widget action
     */
    test(event){
        event.stopPropagation()
        
        // Ignore if disabled
        if(this.props.disabled) return;

    }
}

/**
 * WidgetCard component props
 * 
 * @typedef {Object} WidgetCardObject
 * @property {function} enableWidget
 * @property {function} disableWidget
 * @property {function} toggleWidget
 * @property {boolean} active
 * @property {boolean} disabled
 * @property {string} image
 * @property {string} name
 * @property {string} version
 */
/**
 * @type {WidgetCardObject}
 */
export const WidgetCardShape = {
    // Methods
    enableWidget: PropTypes.func.isRequired,
    disableWidget: PropTypes.func.isRequired,
    toggleWidget: PropTypes.func.isRequired,

    // States
    active: PropTypes.bool,
    disabled: PropTypes.bool,

    // Data
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired
}

// Prop validations
WidgetCard.propTypes = WidgetCardShape

// Exports
export default WidgetCard
