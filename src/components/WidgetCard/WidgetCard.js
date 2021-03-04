// Modules
import React, {
    Component
} from 'react'
// import PropTypes from 'prop-types'

// Elements
import {
    Wrapper,
    CheckBox,
    Image,
    Texts
} from './WidgetCard.styled'

// Component
class WidgetCard extends Component {
    constructor(props){
        // Always call super first
        super(props)

        // State
    }
    render(){
        return <Wrapper>
            <CheckBox />
            <Image image="/assets/icon/app/icon.png" />
            <Texts>
                <div className="name">{ this.props.name || 'Nombre' }</div>
                <div className="version">{ this.props.version || 'v0.0.0' }</div>
            </Texts>
        </Wrapper>
    }
}

// Exports
export default WidgetCard
