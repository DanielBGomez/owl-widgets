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
    }
    render(){
        return <Wrapper>
            <CheckBox active={ this.props.active } disabled={ this.props.disabled } />
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
    test(){
        // Ignore if disabled
        if(this.props.disabled) return;

        console.log("test action")
    }
}

// Prop validations
WidgetCard.propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired
}

// Exports
export default WidgetCard
