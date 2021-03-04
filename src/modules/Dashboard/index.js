// Modules
import React from 'react'
import PropTypes from 'prop-types'
import Styled, { keyframes, css } from 'styled-components'

// Local modules
import { DefaultThemeGlobals } from '../../themes'

// Layout
// import {
//     Label
// } from './Layout.styled'

// Animations
const Flash = keyframes`
    0% {
        opacity: 0;
    }
    5%,
    60% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

// Components
const FlashBang = Styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    
    ${props => props.active && css`
        animation: ${Flash} 5s linear;
    `}
`
import WindowHeader from '../../components/WindowHeader'

// Widget
class Dashboard extends React.Component {
    constructor(props){
        // Always call super first
        super(props)

        // Widgate state
        this.state = {
            show: false
        }

        // Update state
        // setTimeout(() => this.setState({ show: true }), 1000)
    }

    render(){
        return <React.Fragment>
            <DefaultThemeGlobals />
            <WindowHeader />
        </React.Fragment>
    }
}

// Exports
export default Dashboard
