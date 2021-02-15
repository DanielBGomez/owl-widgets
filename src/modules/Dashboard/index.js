// Modules
import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

// Local modules
import { DefaultThemeGlobals } from '../../themes'

// Layout
// import {
//     Label
// } from './Layout.styled'

// Components
const FlashBang = Styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
`

// Widget
class Evidencias extends React.Component {
    constructor(props){
        // Always call super first
        super(props)

        // Widgate state
        this.state = {
        }
    }

    render(){
        return this.state.show ? (
            <div>
                <DefaultThemeGlobals />
                <FlashBang />
            </div>
        ) : ''
    }
}

// Exports
export default Evidencias
